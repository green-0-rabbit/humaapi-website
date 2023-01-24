/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import { DynamicFields, ISmartField } from 'react-hm-dynamic-form';
import FormControl from './form-control';
import LayoutFlex from './layout-flex';
import RenderFields from './render-fields';
import { IFieldGroupMetaFlex } from './types';
import { IFieldGroupMeta } from './types/dynamic-form-with-list.type';

interface IDynamicForm<T extends Record<string, any>> {
  methods: ISmartField<any, T>['methods'];
  errors: ISmartField<T>['errors'];
  fieldsGroupMeta: IFieldGroupMetaFlex<T>[];
}

type RenderGroupProps = Omit<IFieldGroupMeta<any>, 'fieldsMeta'>;

const ReactiveFormFlex = <T extends object>(props: IDynamicForm<T>) => {
  const { fieldsGroupMeta, methods, errors } = props;

  const MemoizedRenderLayout = useCallback(
    (group: RenderGroupProps) => <LayoutFlex />,
    []
  );

  return (
    <DynamicFields
      methods={methods}
      errors={errors}
      fieldsGroupMeta={fieldsGroupMeta as any}
      // renderGroup={MemoizedRenderGroup}
      renderLayout={MemoizedRenderLayout}
      renderFormControl={(controlProps) => <FormControl {...controlProps} />}
      // eslint-disable-next-line @typescript-eslint/no-shadow
      renderFields={(props) => <RenderFields {...props} />}
    />
  );
};
export default ReactiveFormFlex;
