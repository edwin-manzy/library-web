import { cva, VariantProps } from 'class-variance-authority';

export const buttonStyle = cva('h-20 text-3xl px-16 cursor-pointer flex items-center justify-center', {
  variants: {
    intent: {
      primary: '',
      outline: '',
      link: '',
    },
    darkMode: {
      true: '',
      false: '',
    },
    rounded: {
      sm: 'rounded-sm',
      full: 'rounded-xl'
    }
  },
  compoundVariants: [
    {
      intent: 'primary',
      darkMode: false,
      class: 'bg-gray-700 text-white'
    },
    {
      intent: 'outline',
      darkMode: false,
      class: 'border border-grey-700 text-grey-700'
    },
    {
      intent: 'link',
      darkMode: false,
      class: 'text-grey-700'
    }
  ],
  defaultVariants: {
    intent: 'primary',
    darkMode: false,
    rounded: 'full',
  }
});

export type ButtonStyleProps = VariantProps<typeof buttonStyle>;
