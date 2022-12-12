import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Controller, UseFormReturn, Path } from 'react-hook-form';
import styled from '@emotion/styled';
import { Box, Loader } from '@mantine/core';
import BrandCheckbox from './brandcheckbox';
import { SmartInputType } from 'react-hm-dynamic-form';
import { CheckCustomProps } from '../reactive-checkbox';

interface IReactiveReCaptcha<T extends Record<string, any>> {
  methods: Omit<UseFormReturn<T>, 'handleSubmit'>;
  disabled?: boolean;
  fieldKey: string;
  error: any;
}

const OverlayProgress = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;
const ReactiveReCaptcha: FC<SmartInputType<CheckCustomProps>> = (props) => {
  // const { error, methods, fieldKey, disabled, ...rest } = props;
  const {
    methods,
    inputKey,
    helperId,
    errors,
    options,
    isParentList
    // customProps = { size: 'xs', color: 'primary', disabled: false }
  } = props;
  const { control, register, setValue } = methods;
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaFieldName = 'recaptchaCheckbox';

  // const checkboxProps: Parameters<typeof BrandCheckbox>['0'] = {
  //   disabled
  // };

  useEffect(() => {
    register(inputKey as any, {
      required: { value: true, message: '' }
    });
    console.log(methods.getValues());
    console.log(methods.getFieldState(inputKey as any));
  }, [[inputKey, register]]);

  const handleReCaptchaVerify = async (isChecked: boolean) => {
    // console.log('isLoading', isLoading);

    if (isChecked) {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
      }
      //   console.log('ici');

      const token = await executeRecaptcha('contact');

      setValue(inputKey as any, token as any);
      setValue(recaptchaFieldName as any, true as any);
      console.log('after value', methods.getValues());
      console.log('after value state', methods.formState.isValid);

      return;
    }

    setValue(inputKey as any, '' as any);
    setValue(recaptchaFieldName as any, false as any);
    // console.log(methods.getValues());
  };

  useEffect(() => {
    const runProcess = async () => {
      setIsLoading(true);
      await handleReCaptchaVerify(isChecked);
      setIsLoading(false);
    };
    runProcess();
  }, [isChecked]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '230px',
          color: 'black',
          background: 'white',
          padding: '10px',
          borderRadius: '10px',
          border: errors && '2px solid red'
        }}>
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ visibility: isLoading ? 'hidden' : 'visible' }}>
            <Controller
              control={control}
              name={recaptchaFieldName as any}
              rules={{ required: true }}
              defaultValue={false as any}
              render={({ field: { value, ref, name, onBlur } }) => (
                <BrandCheckbox
                  // {...checkboxProps}
                  ref={ref}
                  onBlur={onBlur}
                  onChange={async (event) => {
                    setIsChecked(event.target.checked);
                  }}
                  name={name}
                  checked={value}
                />
              )}
            />
          </Box>
          <OverlayProgress
            style={{
              paddingTop: '4px',
              display: isLoading ? 'block' : 'none'
            }}>
            <Loader />
          </OverlayProgress>
        </Box>
        <span> I am not a robot</span>

        <Image src="/RecaptchaLogo.svg.png" width="50" height="50" alt={''} />
      </Box>
    </>
  );
};

export default ReactiveReCaptcha;
