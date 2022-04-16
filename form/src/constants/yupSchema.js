import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Adınız en az 2 karakter uzunluğunda olmalıdır'),
    lastName: yup
        .string()
        .min(2, 'Soyadınız en az 2 karakter uzunluğunda olmalıdır.'),
    mail: yup
        .string()
        .email('Lütfen Geçerli bir e-posta adresi giriniz')
        .required('E-posta alanı zorunludur.'),
    username: yup
        .string()
        .min(5, 'Kullanıcı adınız en az 5 karakter uzunluğunda olmalıdır')
        .max(20, 'Kullanıcı adı 20 karakterden uzun olamaz.'),
    password: yup
        .string()
        .typeError('Geçerli Karakterleri kullanın.')
        .min(8, 'Şifre en az 8 karakter uzunluğunda olmalıdır.')
        .max(32, 'Şifre uzunluğu 32 karakterden fazla olmamalıdır.')
        .required('Şifre alanı zorunludur.'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Şifreleriniz uyuşmamaktadır.'),
    termConditions: yup
        .boolean()
      //  .required('Sözleşme Kabul edilmedilidir.')
      //  .oneOf([true], 'Sözleşme Kabul edilmedilidir.')


})