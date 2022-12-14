import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Controller, UseFormReturn, Path } from 'react-hook-form';
import styled from '@emotion/styled';
import { Box, Checkbox, Loader } from '@mantine/core';
import { SmartInputType } from 'react-hm-dynamic-form';
import BrandCheckbox from './brandcheckbox';
import { CheckCustomProps } from '../reactive-checkbox';

const OverlayProgress = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;
const ReactiveReCaptcha: FC<SmartInputType<CheckCustomProps>> = (props) => {
  const {
    methods,
    inputKey,
    helperId,
    errors,
    options,
    isParentList,
    customProps
  } = props;
  const { control, register, setValue, formState } = methods;
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaFieldName = 'recaptchaCheckbox';

  const checkboxProps: Parameters<typeof BrandCheckbox>['0'] = {
    disabled: customProps && customProps.disabled
  };

  useEffect(() => {
    register(inputKey as Path<any>);
  }, []);

  const handleReCaptchaVerify = async (isCheck: boolean) => {
    if (isCheck) {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
      }
      const token = await executeRecaptcha('contact');

      setValue(inputKey as Path<any>, token);
      setValue(recaptchaFieldName as Path<any>, true);
      return;
    }

    setValue(inputKey as Path<any>, '');
    setValue(recaptchaFieldName as Path<any>, false);
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
      <Box
        sx={{
          position: 'relative'
        }}>
        <Box
          sx={{
            visibility: isLoading ? 'hidden' : 'visible'
          }}>
          <Controller
            control={control}
            name={inputKey}
            rules={{ ...options }}
            defaultValue={false}
            render={({ field: { onChange, value, ref, name, onBlur } }) => (
              <BrandCheckbox
                {...checkboxProps}
                ref={ref}
                onBlur={onBlur}
                onChange={async (event) => {
                  setIsChecked(event.target.checked);
                  onChange(event);
                }}
                sx={{ display: 'flex' }}
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

      <Image src="/RecaptchaLogo.svg.png" width="40" height="40" alt="" />
    </Box>
  );
};

export default ReactiveReCaptcha;
