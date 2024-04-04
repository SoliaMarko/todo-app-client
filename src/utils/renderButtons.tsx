import EditButton from '@/components/Buttons/EditButton';
import DeleteButton from '@/components/Buttons/DeleteButton';

export const renderEditButton = (link: string) => {
  return <EditButton link={link} />;
};

export const renderDeleteButton = () => {
  return <DeleteButton />;
};
