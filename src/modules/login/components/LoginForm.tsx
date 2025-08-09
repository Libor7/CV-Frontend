/** COMPONENTS */
import { TextField } from "@mui/material";

/** LIBRARIES */
// import debounce from "lodash.debounce";
// import { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  userName: string;
};

const defaultValues: FormValues = {
  userName: "",
};

// touched - či bolo s field interracted, dirty - či sa hodnota zmenila (od defaultnej asi) 

const LoginForm = () => {
  console.log("LoginForm RUNS");
  const form = useForm<FormValues>({
    defaultValues,
    mode: "onChange", // Aktivujeme validáciu počas písania
  });
  const { formState, handleSubmit, register } = form; // watch
  const { errors } = formState;

  //   const userNameValue = watch("userName"); // sleduje zmenu hodnoty

  const submitHandler = (data: FormValues) => {
    console.log("data: ", data);
  };

  //    // ✅ Handler pre validovaný submit
  //   const submitHandler = (data: FormValues) => {
  //     console.log("Formulár odoslaný:", data);
  //     // Môžeš tu volať API alebo inú logiku
  //   };

  //   // ✅ Debounce-ovaná verzia submitu
  //   const debouncedSubmit = useCallback(
  //     debounce((data: FormValues) => {
  //       submitHandler(data);
  //     }, 1000),
  //     []
  //   );

  ////////////////////////////////////////

  // const submitHandler = useCallback((data: FormValues) => {
  //   console.log("Formulár odoslaný:", data);
  // }, []);

  // const debouncedSubmit = useMemo(
  //   () => debounce(submitHandler, 1000),
  //   [submitHandler]
  // );

  ////////////////////////////////////////

  //   // ✅ Sledujeme zmenu hodnoty a po 1s nečinnosti vykonáme debounce submit
  //   useEffect(() => {
  //     if (!userNameValue || errors.userName) return; // ❌ Nespúšťaj, ak prázdne alebo chyba

  //     debouncedSubmit({ userName: userNameValue });

  //     return () => {
  //       debouncedSubmit.cancel(); // 🧹 Vyčistenie pri ďalšej zmene
  //     };
  //   }, [userNameValue, errors.userName, debouncedSubmit]);

  return (
    <form noValidate onSubmit={handleSubmit(submitHandler)}>
      <TextField
        autoComplete="off"
        error={!!errors.userName}
        helperText={errors.userName?.message}
        // id=""
        label="User Name"
        {...register("userName", {
          required: "User Name is required",
        })}
        type="text"
        sx={{
          minWidth: 0, // Dôležité! Zruší minimálnu šírku, aby sa mohol zmenšiť
          // maxWidth: '100%', // Nech sa nezväčšuje viac ako rodič
        }}
      />
    </form>
  );
};

export default LoginForm;

// Používateľ nevie, že sa niečo deje po debounce – pridaj loading stav:

// Disable input počas odosielania (voliteľné)

// <TextField
//   disabled={isSubmitting}

// Zvýrazni validáciu ešte pred debounce submitom
// Uisti sa, že používateľ vie, čo je zle, hneď pri písaní.

// Máš už mode: "onChange" – to je správne. Ak chceš ešte rýchlejší feedback, môžeš použiť criteriaMode: "all" (zobrazí všetky chyby, nie len prvú).

// Zobraz potvrdenie po úspešnom submitnutí
// Napríklad malý Snackbar alebo zelený text pod inputom:

// Pridaj aria-live alebo iné A11Y (accessibility) oznámenia
// Ak je to citlivý formulár (napr. v profile), zlepši aj prístupnosť:

// tsx
// Kopírovať
// Upraviť
// <p role="status" aria-live="polite">
//   {isSubmitting ? "Odosielam..." : submitSuccess ? "Uložené" : ""}
// </p>

// /** COMPONENTS */
// import { TextField, LinearProgress } from "@mui/material";

// /** LIBRARIES */
// import { useForm } from "react-hook-form";
// import { useEffect, useMemo, useState, useCallback } from "react";
// import debounce from "lodash.debounce";

// type FormValues = {
//   userName: string;
// };

// const defaultValues: FormValues = {
//   userName: "",
// };

// const LoginForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false); // 🟢 Stav pre loading indikáciu

//   const {
//     register,
//     watch,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>({
//     defaultValues,
//     mode: "onChange", // 🟢 Okamžité validovanie počas písania
//   });

//   const userNameValue = watch("userName"); // 🟢 Sledujeme zmenu v inpute

//   // 🟢 Funkcia na odoslanie formulára
//   const submitHandler = useCallback((data: FormValues) => {
//     setIsSubmitting(true);
//     console.log("Formulár odoslaný:", data);

//     // 🔵 Simulácia async operácie (napr. API call)
//     setTimeout(() => {
//       setIsSubmitting(false);
//     }, 1000);
//   }, []);

//   // 🟢 Debounce funkcia sa vytvorí len raz a pamätá si submitHandler
//   const debouncedSubmit = useMemo(
//     () => debounce(submitHandler, 1000),
//     [submitHandler]
//   );

//   // 🟢 Keď sa zmení userName, spustíme debounce (ak je validný)
//   useEffect(() => {
//     if (!userNameValue || errors.userName) return;
//     debouncedSubmit({ userName: userNameValue });

//     return () => {
//       debouncedSubmit.cancel(); // 🧹 Vyčistenie medzi rendermi
//     };
//   }, [userNameValue, errors.userName, debouncedSubmit]);

//   return (
//     <form
//       noValidate
//       onSubmit={handleSubmit(submitHandler)} // 🟢 Povolený Enter key submit
//     >
//       {isSubmitting && <LinearProgress />} {/* 🟢 Vizuálny feedback */}

//       <TextField
//         label="User Name"
//         type="text"
//         autoComplete="off"
//         disabled={isSubmitting} // 🟡 Nechceme, aby používateľ písal počas submitu
//         error={!!errors.userName}
//         helperText={errors.userName?.message}
//         {...register("userName", {
//           required: "User Name is required", // 🟢 Validácia
//         })}
//       />
//     </form>
//   );
// };

// export default LoginForm;
