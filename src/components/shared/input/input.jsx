import { memo } from "react";
import Button from "../button";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import PropTypes from 'prop-types';
import Loading from "svgs/input/loading.inline.svg"
import Success from "svgs/input/success.inline.svg"
import Error from "svgs/input/error.inline.svg"

export const InputStatus = ['normal', 'loading', 'success', 'error'];

const styles = {
  transition: 'transition-colors duration-300',
  base: 'bg-transparent outline-none border-none w-full',
  size: {
    md: "h-full text-base font-light"
  },
  theme: {
    'white-primary': "text-white placeholder:tracking-tight-[-0.01em] placeholder:leading-[125%] placeholder:text-transparent placeholder:bg-clip-text placeholder:bg-placeholder-gradient"
  },
};

const StatusButton = {
  normal: (
    <Button
      theme="white-secondary"
      size="sm"
      type="submit"
      transition
    >
      Free trial
    </Button>
  ),
  loading: (
    <Button
      theme="white-secondary"
      size="icon"
      type="submit"
      className="pointer-events-none"
      disabled
    >
      <motion.span
        className="w-7 h-7"
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 360
        }}
        transition={{
          duration: 0.2,
          rotate: {
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <Loading className="w-7 h-7"/>
      </motion.span>
    </Button>
  ),
  success: (
    <Button
      theme="white-green"
      size="icon"
      type="submit"
      className="pointer-events-none"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Success className="w-7 h-7"/>
      </motion.span>
    </Button>
  ),
  error: (
    <Button
      theme="white-pink"
      size="icon"
      type="submit"
      className="pointer-events-none"
    >
      <motion.span
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Error className="w-7 h-7"/>
      </motion.span>
    </Button>
  )
}

const Input = memo(({
  inputSize = 'md',
  theme = 'white-primary',
  transition = false,
  className = null,
  onChange = () => {},
  value = '',
  wrapperClassName = null,
  status = 'normal',
  errorMessage = '',
  ...rest
}) => {
  const onChangeHandler = (e) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <div className={clsx("p-0.5 bg-input-border-gradient rounded-full", wrapperClassName)}>
        <div className={clsx(
          "flex pl-6 pt-1.5 pb-1.5 pr-1.5 h-14 justify-between rounded-full",
          "bg-input-gradient",
          status === 'error' && 'border-red-500'
        )}>
          <input
            className={clsx(
              styles.base,
              styles.size[inputSize],
              styles.theme[theme],
              transition && styles.transition,
              status !== 'normal' && 'opacity-50 cursor-not-allowed',
              className
            )}
            value={value}
            disabled={status !== 'normal'}
            onChange={onChangeHandler}
            {...rest}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={status}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {StatusButton[status]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {errorMessage && (
          <motion.p
            className="absolute -bottom-6 left-6 font-medium text-red-1 text-sm tracking-[-0.046em] leading-[125%]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
});

Input.propTypes = {
  inputSize: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  transition: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  wrapperClassName: PropTypes.string,
  status: PropTypes.oneOf(InputStatus),
  errorMessage: PropTypes.string,
};

Input.displayName = "Input";

export default Input