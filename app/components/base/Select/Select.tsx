'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { FC, useEffect, useMemo, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { HiChevronUpDown } from 'react-icons/hi2';

export interface SelectOption {
  id: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  selectedOptionId: string;
  setSelectedOptionId: (id: string) => void;
  className?: string;
}

export const Select: FC<SelectProps> = ({
  label,
  options,
  selectedOptionId,
  setSelectedOptionId,
  className,
}) => {
  const initialOption = useMemo(
    () =>
      options.find((option) => option.id === selectedOptionId) ?? options[0],
    [options, selectedOptionId],
  );
  const [selected, setSelected] = useState(initialOption);

  useEffect(() => {
    if (initialOption.id !== selected.id) {
      setSelected(initialOption);
    }
  }, [initialOption, selected]);

  const handleChange = (option: SelectOption) => {
    setSelected(option);
    setSelectedOptionId(option.id);
  };

  return (
    <div className={className}>
      <Listbox value={selected} onChange={handleChange}>
        <Label className="block text-sm/6 font-medium text-slate-900">
          {label}
        </Label>
        <div className="relative mt-2">
          <ListboxButton
            className={clsxMerge(
              'grid w-full cursor-default grid-cols-1 rounded-md py-2 pl-4 pr-2',
              'text-left outline outline-1 -outline-offset-1 outline-slate-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-violet-600',
              'bg-violet-100 text-foreground dark:bg-slate-950',
              'hover:bg-violet-200/80 hover:text-slate-700 hover:dark:bg-slate-950/80 hover:dark:text-slate-200',
            )}
          >
            <span className="col-start-1 row-start-1 truncate pr-6">
              {selected.label}
            </span>
            <HiChevronUpDown className="col-start-1 row-start-1 size-5 self-center justify-self-end text-slate-500 sm:size-4" />
          </ListboxButton>

          <ListboxOptions
            transition
            className={clsxMerge(
              'absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black/5',
              'bg-violet-100 text-foreground dark:bg-slate-950',
              'focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in',
            )}
          >
            {options.map((option) => (
              <ListboxOption
                key={option.id}
                value={option}
                className={clsxMerge(
                  'group relative cursor-default select-none py-2 pl-8 pr-4 text-foreground',
                  'data-[focus]:bg-violet-600 data-[focus]:text-slate-200 data-[focus]:outline-none data-[focus]:dark:bg-slate-600',
                )}
              >
                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                  {option.label}
                </span>

                <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white dark:text-slate-300">
                  <FaCheck className="size-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};
