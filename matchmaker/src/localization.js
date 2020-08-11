import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({

    en: {
        menu: {
            Home: 'Home',
            Products: 'Products',
            Services: 'Services',
            OnlineGoods: 'Online Goods',
            EmeraldDragon: 'Emerald Dragon',
            Features: 'Features'
        },

        validation: {
            RequiredErrorMessage: 'required',
            MinLengthErrorMessage: 'Minimal length is ',
            MaxLengthErrorMessage: 'Maximal length is ',
            EmailErrorMessage: 'Please enter valid email',
            PasswordErrorMessage: 'Password must contain at least 6 letters, one upper case, one lower case and one number.',
            UserExistsErrorMessage: 'User with this email address already exists',
            OldPasswordDidNotMatch: 'Old password did not match',
            PasswordsNotEqual: 'Passwords do not match',
            notNumber: 'Not number'
        },

        login: {

        },

        loginForm: {
            email: 'Email',
            password: 'Password'
        }
    }
});

export default strings;