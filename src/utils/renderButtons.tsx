import EditButton from '@/components/Buttons/EditButton';
import DeleteButton from '@/components/Buttons/DeleteButton';
import RadioButtons from '@/components/Buttons/RadioButtons';
import {StatusOption} from '@/interfaces/optionsInterfaces/status.interface';

// export const renderEditButton = () => {
//   return <EditButton />;
// };

// export const renderDeleteButton = () => {
//   return <DeleteButton />;
// };

export const renderActionsButtons = () => {
  return (
    <>
      <EditButton />
      <DeleteButton />
    </>
  );
};

export const renderRadioButtons = (options: StatusOption[]) => {
  return <RadioButtons options={options} />;
};
