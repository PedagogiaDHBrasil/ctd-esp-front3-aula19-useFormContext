import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./input.module.css";

type Props = { name: string; autocomplete?: string[] };

const InputField: FC<Props> = ({ name, autocomplete }) => {
  const { register } = useFormContext();

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          list={name}
          placeholder={name}
          {...register(name)}
        />
      </div>
      {autocomplete?.length ? (
        <datalist id={name}>
          {autocomplete.map((op) => (
            <option value={op} key={op}></option>
          ))}
        </datalist>
      ) : null}
    </>
  );
};

export default InputField;
