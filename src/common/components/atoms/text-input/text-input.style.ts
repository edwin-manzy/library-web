import { cva } from 'class-variance-authority';

export const labelStyle = cva(`flex items-center
  px-5 absolute top-0 first-letter:capitalize
  transition-all duration-300
  `, {
  variants: {
    intent: {
      primary: '',
      outline: '',
    },
    active: {
      true: 'text-lg h-10 font-bold',
      false: 'text-2xl h-20',
    }
  },
  defaultVariants: {
    active: false,
  }
});

export const wrapperStyle = cva('uc-first relative flex',
  {
    variants: {
      intent: {
        primary: '',
        outline: 'border border-gray-300',
      },
      darkMode: {
        true: '',
        false: '',
      },
      active: {
        true: '',
        false: '',
      }
    },
    compoundVariants: [
      {
        intent: 'primary',
        darkMode: false,
        className: ''
      },
      {
        intent: 'outline',
        darkMode: false,
        className: ''
      },
    ],
    defaultVariants: {
      intent: 'outline',
      active: false,
    }
  }
);

export const inputStyle = cva('w-full h-20 pt-2 relative outline-none px-5', {
  variants: {
    active: {
      true: '',
      false: '',
    }
  },
  defaultVariants: {
    active: false,
  }
});
