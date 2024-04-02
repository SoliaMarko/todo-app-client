import {Tags} from '@/enums/tags.enum';
import {TagOption} from '@/interfaces/optionsInterfaces/tag.interface';

export const tagOptions: TagOption[] = [
  {value: Tags.Study, label: 'Study'},
  {value: Tags.Work, label: 'Work'},
  {value: Tags.Hobby, label: 'Hobby'},
  {value: Tags.Family, label: 'Family'},
  {value: Tags.Friends, label: 'Friends'}
];
