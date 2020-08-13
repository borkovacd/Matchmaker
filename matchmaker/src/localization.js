import LocalizedStrings from "react-localization";

let strings = new LocalizedStrings({
  en: {
    menu: {
      Home: "Serb, get married!",
      About: "About",
      Register: "Register",
      Login: "Login",
      Profile: "Profile",
      Logout: "Logout",
      LanguageSwitch: "Change language",
    },

    loginForm: {
      title: "Members Login",
      username: "Nick (Login)",
      email: "Email",
      password: "Password",
      login: "Login",
      forgotYourPassword: "Forgot your password?",
      register: "Register",
      rememberMe: "Remember me",
      continue: "Continue",
      notMember: "Not a member?",
      signUpNow: "Sign Up Now",
      loginWith: "Login with: ",
      continueWith: "Continue with",
    },

    registrationForm: {
      title: "Personal Info",
      username: "Nick (Login)",
      name: "Name",
      email: "Email",
      birthday: "Birthday",
      gender: "I am",
      intrestedInGender: "Looking for",
      intrestedInAge: "Age",
      intrestedFor: "For:",
      continue: "Continue",
      continueWithDescription:
        "Please add personal details about yourself to register and find friends!",
      continueWith: "Continue with",

      firstName: "First name",
      lastName: "Last name",
      password: "Password",
      repeatPassword: "Repeat password",
      weight: "Weight",
      height: "Height",
      position: "Position",
      nationality: "Nationality",
      placeOfBirth: "Place of birth",
      playerPhoto: "Player photo",
      uploadPhoto: "Upload photo",
      youtubeVideo: "Youtube video",
      otherLinks: "Other links",
      languages: "Languages",
      euPassport: "EU passport",
      clubs: "Club",
      country: "Country",
      league: "League",
      club: "Club",
      year: "Year",
      successMessage:
        "You have registered successfully. We need some more details about you, so people could find you easier.",
      doItLater: "I want to fill these data later.",
      awardsWithClubs: "Awards with club",
      honorsWithClubs: "Honors with club",
      awardsWithNationalTeam: "Awards with national team",
      honorsWithNationalTeam: "Honors with national team",
      notes: "Notes",
      nationalTeams: "National team",
      passwordNotMatch: "Passwords do not match",
      emailExists: "Email exists",
      positionNote:
        "If you play more positions (in defense and attack), please state it in the field Note, located at the next registration step.",
      clubsNotice:
        "Please fill in all required fields regarding the club you are currently playing for, or you played for before (country, club name, league, month and year), so that the system can correctly register your current and previous engagement.",
    },

    forgotPassword: {
      text: "Reset password",
      resetPassword: "Reset password",
      requested: "Reset password already requested",
      sentText: "Reset password requested. Please check your email.",
    },

    resetPassword: {
      password: "Password",
      passwordRepeat: "Repeat password",
      passwordDoNotMatch: "Passwords do not match",
      text: "Enter new password",
      doneText: "Your password has changed, please go to ",
      login: "login",
    },

    countries: {
      all: "All",
    },

    search: {
      resultPart1: "You have found ",
      resultPart2: "players",
    },

    playerPreview: {
      position: "Position",
      currentClub: "Current club",
      weight: "Weight",
      height: "Height",
      placeOfBirth: "Place of birth",
      dateOfBirth: "Date of birth",
      years: "Years",
    },

    home: {
      search: "Search...",
      text1:
        "<ul>" +
        "<li>You are playing handball</li>" +
        "<li>No one sees you</li>" +
        "<li>You are on the right place</li>" +
        "<li>Enter the world of professional handball</li>" +
        "<li>Handball Hunter is the place for your promotion</li>" +
        "<li>Register for free</li>" +
        "</ul>",
      text2:
        "<br>Handball Hunter is the web platform specialized for promotion of handball players. We want to help all handball players to find their professional engagement and to make their dreams come true. Registration on our web site is completely free. With the simple registration, you will get an...</p>",
      playing: "Playing",
      handball: "Handball?",
      weAre: "We are",
      hunters: "Hunters!",
      register: "Register",
      viewMore: "View more",
      new: "Recently",
      ones: "Registered.",
      instagram: "Instagram",
      feed: "Feed.",
      follow: "Follow",
    },

    privacyPolicy: {
      title: "Privacy Policy",
      content:
        "<p>This website does not share personal information with third parties nor do we store any information about your visit to this blog other than to analyze and optimize your content and reading experience through the use of cookies.</p>" +
        "<p>You can turn off the use of cookies at anytime by changing your specific browser settings. We are not responsible for republished content from this blog on other blogs or websites without our permission.</p>" +
        "<p>This privacy policy is subject to change without notice and was last updated on 27. January 2019.</p>",
    },

    termsOfUse: {
      title: "Terms And Conditions",
      content:
        "<p>Handball Hunter is committed to protecting the privacy of members and users of the Web site. We follow the following policies:</p>" +
        "<p>Email Addresses collected during registration/subscription steps are not sold, rent, or lend to anyone outside Handballhunter.com.</p>" +
        "<p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. Terms and Conditions from TermsFeed for Sport Contact.</p>" +
        "<h3>Accounts</h3>" +
        "<p>The online transaction processing is provided by PSIGate using the highest commercially available encryption technology - SSL Certificate encryption. All confidential information is automatically encrypted before it is transmitted, to protect the data from being read and interpreted.</p>" +
        "<p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>" +
        "<p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>" +
        "<p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>" +
        "<h3>Link to other web sites</h3>" +
        "<p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Handball Hunter.</p>" +
        "<p>Handball Hunter has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Handball Hunter shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>" +
        "<p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>" +
        "<h3>Termination</h3>" +
        "<p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>" +
        "<p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>" +
        "<p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>" +
        "<p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>" +
        "<h3>Governing law</h3>" +
        "<p>These Terms shall be governed and construed in accordance with the laws of Serbia, without regard to its conflict of law provisions.</p>" +
        "<p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>" +
        "<h3>Changes</h3>" +
        "<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>" +
        "<p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>",
    },

    filter: {
      gender: "Gender",
      position: "Position",
      years: "Years",
      height: "Height (cm)",
      weight: "Weight (kg)",
      euPassport: "EU Passport",
      nationality: "Nationality",
      search: "Search",
    },

    login: {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      wrongCredentials: "Wrong login data",
    },

    about: {
      weAre: "About",
      hunters: "Us",
      text:
        "<p>Handball Hunter is the web platform specialized for promotion of handball players. We want to help all handball players to find their professional engagement and to make their dreams come true. </p>" +
        "<p>Registration on our web site is completely free. With the simple registration, you will get an opportunity to be transparent and noticed by all clubs and managers in the world. We are giving you the opportunity to come out from handball anonymity and to become a professional player. </p>" +
        "<p>Handball Hunter is an idea, that came from professional handball players and managers that have started their careers from small areas and environments, and that know how hard is it to be noticed and found as a talent.</p>" +
        "<p>We are there to help you. Handball Hunter is what we were waiting for a long time, managers, coaches and handball players, all at the same place.</p>" +
        "<p>Handball is the game, which is played not only in the handball court, but out of the court as well. Win with us. </p>",
    },

    premium: {
      title: "Go",
      titleOrange: "Premium.",
      subtitle: "More visible to other people.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      payNow: "Pay now",

      option1: {
        title: "Home page",
        price: "10$/mo",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestia.",
      },

      option2: {
        title: "Search results",
        price: "15$/mo",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestia.",
      },

      option3: {
        title: "Most visible player",
        price: "25$/mo",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestia.",
      },
    },

    userInfo: {
      editYourProfile: "Edit your profile",
      premiumAccount: "Premium Account",
      position: "Position",
      currentClub: "Current Club",
      weight: "Weight",
      height: "Height",
      placeOfBirth: "Place of birth",
      dateOfBirth: "Date of birth",
      info: "Info",
      links: "Links",
      deactivate: "Deactivate",
      activate: "Activate",
      yes: "Yes",
      no: "No",
      confirmAction: "Confirm Action",
    },

    socialShare: {
      facebook: "facebook",
      whatsapp: "whatsapp",
      viber: "viber",
      copy: "copy",
    },

    validation: {
      RequiredErrorMessage: "required",
      MinLengthErrorMessage: "Minimal length is ",
      MaxLengthErrorMessage: "Maximal length is ",
      EmailErrorMessage: "Please enter valid email",
      PasswordErrorMessage:
        "Password must contain at least 6 letters, one upper case, one lower case and one number.",
      UserExistsErrorMessage: "User with this email address already exists",
      OldPasswordDidNotMatch: "Old password did not match",
      PasswordsNotEqual: "Passwords do not match",
      notNumber: "Not number",
    },
    footer: {
      copyright: "Copyright",
      privacyPolicy: "Privacy policy",
      payment: "Payment",
      termsOfUse: "Terms of use",
      phone1: "+ 378 055 232 300",
      phone2: "+ 378 055 232 300",
      email: "office@handballhunter.com",
      site: "www.handballhunter.com",
    },
    registrationStep: {
      step: "Step",
    },

    gender: {
      female: "Female",
      male: "Male",
    },

    position: {
      all: "All",
      goalkeeper: "Goalkeeper",
      rightWingman: "Right Wing",
      leftWingman: "Left Wing",
      pivot: "Pivot",
      leftBackcourt: "Left Back",
      rightBackcourt: "Right Back",
      centerBackcourt: "Center Back",
    },

    months: {
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      jun: "Jun",
      july: "July",
      august: "August",
      september: "September",
      october: "October",
      november: "November",
      december: "December",
    },

    select: {
      placeholder: "Please select",
      day: "Day",
      month: "Month",
      year: "Year",
      search: "Search...",
    },

    euPassport: {
      yes: "Yes",
      no: "No",
      nevermind: "Nevermind",
    },

    profile: {
      languages: "Languages",
      clubs: "Clubs",
      nationalTeams: "National team",
      clubAwards: "Club awards",
      clubHonors: "Club honors",
      nationalTeamAwards: "National team awards",
      nationalTeamHonors: "National team honors",
      youtube: "YouTube",
      otherLinks: "Other links",
    },

    addMore: "+ Add",
    edit: "Edit",
    back: "Back",
    next: "Next",
    checkYourProfile: "Check your profile",
    goToHomePage: "Go to home page",

    dateFormatString: "DD-MM-YYYY",
  },
  de: {
    menu: {
      Home: "Heirate sich, Serbe!",
      About: "Über uns",
      Register: "Registrieren",
      Login: "Anmelden",
      Profile: "Profil",
      Logout: "Abmelden",
      LanguageSwitch: "Sprache ändern",
    },

    loginForm: {
      title: "Mitglieder Login",
      username: "Nutzername",
      email: "E-Mail",
      password: "Passwort",
      login: "Anmelden",
      forgotYourPassword: "Passwort vergessen?",
      register: "Registrieren",
      rememberMe: "Erinnere dich an mich",
      continue: "Fortsetzen",
      notMember: "Kein Mitglied?",
      signUpNow: "Jetzt registrieren",
      loginWith: "Einloggen mit",
      continueWith: "Fortsetzen mit",
    },

    registrationForm: {
      title: "Persönliche Informationen",
      username: "Nutzername",
      name: "Name",
      email: "E-Mail",
      birthday: "Geburtstag",
      gender: "Ich bin",
      intrestedInGender: "Auf der Suche nach",
      intrestedInAge: "Alter",
      intrestedFor: "Für:",
      continue: "Fortsetzen",
      continueWithDescription:
        "Bitte fügen Sie persönliche Daten über sich hinzu, um sich zu registrieren und Freunde zu finden!",
      continueWith: "Fortsetzen mit",
      firstName: "Vorname",
      lastName: "Name",
      password: "Passwort",
      repeatPassword: "Passwort wiederholen",
      weight: "Gewicht",
      height: "Grösse",
      position: "Position",
      dateOfBirth: "Geburtsdatum",
      nationality: "Nationalität",
      placeOfBirth: "Geburtsort",
      playerPhoto: "Spielerfoto",
      uploadPhoto: "Foto hochladen",
      youtubeVideo: "Youtube video",
      otherLinks: "Andere Links",
      languages: "Sprachen",
      euPassport: "EU pass",
      clubs: "Vereine",
      country: "Land",
      league: "Liga",
      club: "Verein",
      year: "Jahr",
      successMessage:
        "Du hast dich erfolgreich angemeldet. Wir brauchen noch mehr Informationen über dich, damit man dich einfacher finden kann.",
      doItLater: "Ich möchte dieses Datenblatt ausfüllen. ",
      awardsWithClubs: "Persönliche Auszeichnungen und Erfolge (mit Vereinen)",
      honorsWithClubs: "Gruppen Auszeichnungen und Erfolge (mit Vereinen)",
      awardsWithNationalTeam:
        "Persönliche Auszeichnungen und Erfolge (mit Nationalmannschaft)",
      honorsWithNationalTeam:
        "Gruppen Auszeichnungen und Erfolge (mit Nationalmannschaft)",
      notes: "Anmerkungen",
      nationalTeams: "Nationalmannschaft",
      passwordNotMatch: "Passwörter stimmen nicht überein",
      emailExists: "Email existiert",
      positionNote:
        "Wenn Sie auf mehreren Positionen (in der Verteidigung und im Angriff) spielen, geben Sie dies bitte im Hinweisfeld an, das in dem nächsten Schritt findet.",
      clubsNotice:
        "Bitte geben Sie alle Informationen ein, die sich auf den Verein beziehen, in welchem Sie spielen oder gespielt haben (Land, Name des Vereins, Liga, Monat und Jahr), damit das System die korrekte Registrierung Ihrer aktuellen und vorigen Anmeldung vornehmen kann.",
    },

    forgotPassword: {
      text: "Passwort zurücksetzen",
      resetPassword: "Passwort zurücksetzen",
      requested: "Reset already requested",
      sentText: "Passwort zurücksetzen angefordert. Bitte prüfe deine E-Mails.",
    },

    resetPassword: {
      password: "Passwort",
      passwordRepeat: "Passwort wiederholen",
      passwordDoNotMatch: "Passwörter stimmen nicht überein",
      text: "Neues Passwort eingeben",
      doneText: "Dein Passwort hat sich geändert, gehe zu ",
      login: "Anmelden",
    },

    countries: {
      all: "Alle",
    },

    search: {
      resultPart1: "Du hast",
      resultPart2: "Mitspieler gefunden",
    },

    playerPreview: {
      position: "Position",
      currentClub: "Actueller Verein",
      weight: "Gewicht",
      height: "Grösse",
      placeOfBirth: "Geburtsort",
      dateOfBirth: "Geburtsdatum",
      years: "Alter",
    },

    home: {
      search: "Suchen...",
      text1:
        "<ul>" +
        "<li>Du spielst Handball</li>" +
        "<li>Keiner sieht dich</li>" +
        "<li>Du bist hier genau am richtigen Ort</li>" +
        "<li>Steige in die Welt des Profi-Handballs ein</li>" +
        "<li>Handball Hunter ist der perfekte Ort, um dich zu präsentieren und entdeckt zu werden</li>" +
        "<li>Melde dich gratis an</li>" +
        "</ul>",
      text2:
        "<br>Handball Hunter ist eine Internetplattform zur Repräsentation von Handballspielern/Handballspielerinnen. Wir wollen allen Handballspielern / Handballspielerinnen helfen, ein professionelles Engagement zu finden und deren Träume wahr werden zu lassen.Die Anmeldung auf unserer Homepage ist komplett kostenlos. Mit der einfachen...</p>",
      playing: "Spielst",
      handball: "du Handball?",
      weAre: "Wir sind",
      hunters: "Hunters!",
      register: "Anmelden",
      viewMore: "Siehe mehr",
      new: "Kürzlich",
      ones: "Angemeldet.",
      instagram: "Instagram",
      feed: "Feed.",
      follow: "Folgen",
    },

    privacyPolicy: {
      title: "Privacy Policy",
      content:
        "<p>This website does not share personal information with third parties nor do we store any information about your visit to this blog other than to analyze and optimize your content and reading experience through the use of cookies.</p>" +
        "<p>You can turn off the use of cookies at anytime by changing your specific browser settings. We are not responsible for republished content from this blog on other blogs or websites without our permission.</p>" +
        "<p>This privacy policy is subject to change without notice and was last updated on 27. January 2019.</p>",
    },

    termsOfUse: {
      title: "Terms And Conditions",
      content:
        "<p>Handball Hunter is committed to protecting the privacy of members and users of the Web site. We follow the following policies:</p>" +
        "<p>Email Addresses collected during registration/subscription steps are not sold, rent, or lend to anyone outside Handballhunter.com.</p>" +
        "<p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. Terms and Conditions from TermsFeed for Sport Contact.</p>" +
        "<h3>Accounts</h3>" +
        "<p>The online transaction processing is provided by PSIGate using the highest commercially available encryption technology - SSL Certificate encryption. All confidential information is automatically encrypted before it is transmitted, to protect the data from being read and interpreted.</p>" +
        "<p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>" +
        "<p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>" +
        "<p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>" +
        "<h3>Link to other web sites</h3>" +
        "<p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Handball Hunter.</p>" +
        "<p>Handball Hunter has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Handball Hunter shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>" +
        "<p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>" +
        "<h3>Termination</h3>" +
        "<p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>" +
        "<p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>" +
        "<p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>" +
        "<p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>" +
        "<h3>Governing law</h3>" +
        "<p>These Terms shall be governed and construed in accordance with the laws of Serbia, without regard to its conflict of law provisions.</p>" +
        "<p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>" +
        "<h3>Changes</h3>" +
        "<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>" +
        "<p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>",
    },

    filter: {
      gender: "Geschlecht",
      position: "Position",
      years: "Alter",
      height: "Grösse (cm)",
      weight: "Gewicht (kg)",
      euPassport: "EU Pass",
      nationality: "Nationalität",
      search: "Suchen",
    },

    login: {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      wrongCredentials: "Falsche Zugangsdaten",
    },

    about: {
      weAre: "Über",
      hunters: "Uns.",
      text:
        "<p>Handball Hunter ist eine Internetplattform zur Repräsentation von Handballspielern / Handballspielerinnen. Wir wollen allen Handballspielern / Handballspielerinnen helfen, ein professionelles Engagement zu finden und deren Träume wahr werden zu lassen. </p>" +
        "<p>Die Anmeldung auf unserer Homepage ist komplett kostenlos. Mit der einfachen Anmeldung wirst du die Chance kriegen, von allen Vereinen und Spielerberatern / Spielerberaterinnen der Welt entdeckt zu werden. Wir ermöglichen dir, aus der Handball - Anonymität rauszukommen und ein Profi zu werden. </p>" +
        "<p>Handball Hunter ist eine Idee, geschaffen von Profihandballern und Spielerberatern, die ihre Karrieren in kleinen Gebieten starteten und somit wissen, wie hart es ist, entdeckt zu werden.</p>" +
        "<p>Wir sind hier, um dir zu helfen. Auf Handball Hunter haben wir lange gewartet – Spielerberater, Trainer und Handballspieler / Handballspielerinnen - alle am gleichen Ort. </p>" +
        "<p>Handball ist das Spiel, das nicht nur auf dem Feld gespielt wird, sondern auch neben dem Feld. Gewinne mit uns. </p>",
    },

    premium: {
      title: "Go",
      titleOrange: "Premium.",
      subtitle: "More visible to other people.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      payNow: "Pay now",
      option1: {
        title: "Home page",
        price: "10$/mo",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestia.",
      },

      option2: {
        title: "Search results",
        price: "15$/mo",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestia.",
      },

      option3: {
        title: "Most visible player",
        price: "25$/mo",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestia.",
      },
    },

    userInfo: {
      editYourProfile: "Profil bearbeiten",
      premiumAccount: "Premium Account",
      position: "Position",
      currentClub: "Actueller Verein",
      weight: "Gewicht",
      height: "Grösse",
      placeOfBirth: "Geburtsort",
      dateOfBirth: "Geburtsdatum",
      info: "Info",
      links: "Link",
      deactivate: "Deaktivieren",
      activate: "Aktivieren",
      yes: "Ja",
      no: "Nein",
      confirmAction: "Bestätige die Handlung",
    },

    socialShare: {
      facebook: "facebook",
      whatsapp: "whatsapp",
      viber: "viber",
      copy: "copy",
    },

    validation: {
      RequiredErrorMessage: "Erforderlich",
      MinLengthErrorMessage: "Minimale Länge ist ",
      MaxLengthErrorMessage: "Maximale Länge ist ",
      EmailErrorMessage: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
      PasswordErrorMessage:
        "Das Passwort muss mindestens 6 Buchstaben, einen Großbuchstaben, einen Kleinbuchstaben und eine Nummer beinhalten.",
      UserExistsErrorMessage:
        "Benutzer mit dieser E-Mail-Adresse ist bereits vorhanden",
      OldPasswordDidNotMatch: "Das alte Passwort stimmt nicht überein",
      PasswordsNotEqual: "Passwörter stimmen nicht überein",
      notNumber: "Nicht nummer",
    },
    footer: {
      copyright: "Copyright",
      privacyPolicy: "Privacy policy",
      payment: "Payment",
      termsOfUse: "Terms of use",
      phone1: "+ 378 055 232 300",
      phone2: "+ 378 055 232 300",
      email: "office@handballhunter.com",
      site: "www.handballhunter.com",
    },

    registrationStep: {
      step: "Schritt",
    },

    gender: {
      female: "Weiblich",
      male: "Männlich",
    },

    position: {
      all: "Alle",
      goalkeeper: "Torhüter",
      rightWingman: "Rechtsaussen",
      leftWingman: "Linksaussen",
      pivot: "Kreisläufer",
      leftBackcourt: "Rückraum Links",
      rightBackcourt: "Rückraum Rechts",
      centerBackcourt: "Rückraum Mitte",
    },

    months: {
      january: "Januar",
      february: "Februar",
      march: "März",
      april: "April",
      may: "Mai",
      jun: "Juni",
      july: "Juli",
      august: "August",
      september: "September",
      october: "Oktober",
      november: "November",
      december: "Dezember",
    },

    select: {
      placeholder: "Bitte auswählen",
      day: "Tag",
      month: "Monat",
      year: "Jahr",
      search: "Suchen...",
    },

    euPassport: {
      yes: "Ja",
      no: "Nein",
      nevermind: "Egal",
    },

    profile: {
      languages: "Sprachen",
      clubs: "Vereine",
      nationalTeams: "Nationalmannschaft",
      clubAwards: "Persönliche Auszeichnungen und Erfolge (mit Vereinen)",
      clubHonors: "Gruppen Auszeichnungen und Erfolge (mit Vereinen)",
      nationalTeamAwards:
        "Persönliche Auszeichnungen und Erfolge (mit Nationalmannschaft)",
      nationalTeamHonors:
        "Gruppen Auszeichnungen und Erfolge (mit Nationalmannschaft)",
      youtube: "YouTube",
      otherLinks: "Andere Links",
    },

    addMore: "+ Hinzufügen",
    edit: "Bearbeiten",
    back: "Zurück",
    next: "Next",
    checkYourProfile: "Überprüfe dein Profil",
    goToHomePage: "Gehe zur Startseite",
    dateFormatString: "DD-MM-YYYY",
  },

  rs: {
    menu: {
      Home: "Srbine, oženi se!",
      About: "O nama",
      Register: "Registrujte se",
      Login: "Prijavite se",
      Profile: "Profil",
      Logout: "Odjavite se",
      LanguageSwitch: "Promenite jezik",
    },

    loginForm: {
      title: "Korisnička prijava",
      username: "Korisničko ime",
      email: "E-mail",
      password: "Lozinka",
      login: "Prijavite se",
      forgotYourPassword: "Zaboravili ste lozinku?",
      register: "Registrujte se",
      rememberMe: "Zapamti me",
      continue: "Nastavi",
      notMember: "Niste korisnik?",
      signUpNow: "Registrujte se sada",
      loginWith: "Prijavite se sa:",
      continueWith: "Nastavite koristeći",
    },

    registrationForm: {
      title: "Lični podaci",
      username: "Korisničko ime",
      name: "Ime",
      email: "Email",
      birthday: "Rođendan",
      gender: "Ja sam",
      intrestedInGender: "Zainteresovan za",
      intrestedInAge: "Godine",
      intrestedFor: "Za:",
      continue: "Nastavite",
      continueWithDescription:
        "Dodajte lične podatke o sebi kako biste se registrovali i pronašli prijatelje!",
      continueWith: "Nastavite koristeći",

      firstName: "Ime",
      lastName: "Prezime",
      password: "Lozinka",
      repeatPassword: "Ponovite lozinku",
      weight: "Težina",
      height: "Visina",
      position: "Pozicija",
      dateOfBirth: "Datum rođenja",
      nationality: "Nacionalnost",
      placeOfBirth: "Mesto rođenja",
      playerPhoto: "Slika",
      uploadPhoto: "Učitajte sliku",
      youtubeVideo: "Youtube video",
      otherLinks: "Drugi linkovi",
      languages: "Jezici",
      euPassport: "EU pasoš",
      clubs: "Klubovi",
      country: "Država",
      league: "Liga",
      club: "Klub",
      year: "Godina",
      successMessage:
        "Uspešno ste se registrovali. Unesite još podataka o sebi, kako bi svi mogli lakše da vas pronađu.",
      doItLater: "Želim da popunim ove podatke kasnije.",
      awardsWithClubs: "Lične nagrade i dostignuća (sa klubom)",
      honorsWithClubs: "Nagrade i dostignuća tima (sa klubom)",
      awardsWithNationalTeam: "Lične nagrade i dostignuća (sa reprezentacijom)",
      honorsWithNationalTeam: "Nagrade i dostignuća tima (sa reprezentacijom)",
      notes: "Napomena",
      nationalTeams: "Reprezentacija",
      passwordNotMatch: "Lozinke se ne podudaraju",
      emailExists: "Email već postoji",
      positionNote:
        " Ukoliko igrate na vise pozicija (u odbrani i napadu), molimo vas da to navedete u polje ‘Napomena’, koje se nalazi na sledecem koraku registracije.",
      clubsNotice:
        "Molimo unesite sve podatke vezano za klub u kome igrate ili ste igrali (drzavu, naziv kluba, lige, mesec i godinu), kako bi sistem mogao validno da registruje vase trenutno i prethodno angazovanje.",
    },

    forgotPassword: {
      text: "Resetujte lozinku",
      resetPassword: "Resetujte lozinku",
      requested: "Resetovanje već zahtevano",
      sentText: "Resetovanje lozinke zahtevano. Molimo proverite vaš e-mail.",
    },

    resetPassword: {
      password: "Lozinka",
      passwordRepeat: "Ponovite lozinku",
      passwordDoNotMatch: "Lozinke se ne podudaraju",
      text: "Upišite lozinku",
      doneText: "Vaša lozinka je promenjena, idite na ",
      login: "prijava",
    },

    countries: {
      all: "Sve",
    },

    search: {
      resultPart1: "Pronašli ste",
      resultPart2: "igrača",
    },

    playerPreview: {
      position: "Pozicija",
      currentClub: "Trenutni klub",
      weight: "Težina",
      height: "Visina",
      placeOfBirth: "Mesto rođenja",
      dateOfBirth: "Datum rođenja",
      years: "Godine",
    },

    home: {
      search: "Pretraga...",
      text1:
        "<ul>" +
        "<li>Igrate rukomet</li>" +
        "<li>Niko vas ne primećuje</li>" +
        "<li>Na pravom ste mestu</li>" +
        "<li>Otvorite svet profesionalnog rukometa</li>" +
        "<li>Handball Hunter je mesto vaše promocije</li>" +
        "<li>Registrujte se besplatno</li>" +
        "</ul>",
      text2:
        "<br>Handball Hunter je veb platforma specijalizovana za promociju rukometaša. Želimo svima da pomognemo da pronađu profesionalni angažman i da ispune svoje snove. Registracija na našem sajtu je potpuno besplatna. Uz jednostavnu registraciju...</p>",
      playing: "Igrate",
      handball: "Rukomet?",
      weAre: "Mi smo",
      hunters: "Hunters!",
      register: "Registrujte se",
      viewMore: "Vidi još",
      new: "Poslednje",
      ones: "Registovani.",
      instagram: "Instagram",
      feed: "Profil.",
      follow: "Pratite",
    },

    privacyPolicy: {
      title: "Politika privatnosti",
      content:
        "<p>This website does not share personal information with third parties nor do we store any information about your visit to this blog other than to analyze and optimize your content and reading experience through the use of cookies.</p>" +
        "<p>You can turn off the use of cookies at anytime by changing your specific browser settings. We are not responsible for republished content from this blog on other blogs or websites without our permission.</p>" +
        "<p>This privacy policy is subject to change without notice and was last updated on 27. January 2019.</p>",
    },

    termsOfUse: {
      title: "Uslovi korišćenja",
      content:
        "<p>Handball Hunter is committed to protecting the privacy of members and users of the Web site. We follow the following policies:</p>" +
        "<p>Email Addresses collected during registration/subscription steps are not sold, rent, or lend to anyone outside Handballhunter.com.</p>" +
        "<p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. Terms and Conditions from TermsFeed for Sport Contact.</p>" +
        "<h3>Accounts</h3>" +
        "<p>The online transaction processing is provided by PSIGate using the highest commercially available encryption technology - SSL Certificate encryption. All confidential information is automatically encrypted before it is transmitted, to protect the data from being read and interpreted.</p>" +
        "<p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>" +
        "<p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>" +
        "<p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>" +
        "<h3>Link to other web sites</h3>" +
        "<p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Handball Hunter.</p>" +
        "<p>Handball Hunter has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Handball Hunter shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>" +
        "<p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>" +
        "<h3>Termination</h3>" +
        "<p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>" +
        "<p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>" +
        "<p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>" +
        "<p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>" +
        "<h3>Governing law</h3>" +
        "<p>These Terms shall be governed and construed in accordance with the laws of Serbia, without regard to its conflict of law provisions.</p>" +
        "<p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>" +
        "<h3>Changes</h3>" +
        "<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>" +
        "<p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>",
    },

    filter: {
      gender: "Pol",
      position: "Pozicija",
      years: "Godine",
      height: "Visina (cm)",
      weight: "Težina (kg)",
      euPassport: "EU Pasoš",
      nationality: "Nacionalnost",
      search: "Pretraga",
    },

    login: {
      wrongCredentials: "Pogrešni podaci za prijavu",
    },

    about: {
      weAre: "O",
      hunters: "Nama.",
      text:
        "<p>Handball Hunter je platorma specijalizovana za promociju rukometaša. Želimo svima da pomognemo da pronađu svoje profesionalno angažovanje i da ostvare svoje snove. </p>" +
        "<p>Registracija na našem sajtu je potpuno besplatna. Uz jednostavnu registraciju, dobićete mogućnost da budete transparentni i primećeni od strane svih klubova i menadžera na svetu. Dajemo vam mogućnost da izađete iz rukometne anonimnosti i da postanete profesionalni igrač. </p>" +
        "<p>Handball Hunter je ideja, koja je potekla od profesionalnih rukometaša i menadžera koji su započeli svoje karijere u malim sredinama i okruženjima, koji znaju koliko je teško biti primećen i prepoznat kao talenat.</p>" +
        "<p>Tu smo da vam pomognemo. Handball Hunter je nešto što smo svi dugo čekali - igrači. treneri. menadžeri, i to svi na istom mestu.</p>" +
        "<p>Rukomet je igra koja se ne igra samo na terenu, već i izvan njega. Pobedite sa nama. </p>",
    },

    premium: {
      title: "Go",
      titleOrange: "Premium.",
      subtitle: "More visible to other people.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      payNow: "Pay now",

      option1: {
        title: "Home page",
        price: "10$/mo",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestia.",
      },

      option2: {
        title: "Search results",
        price: "15$/mo",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestia.",
      },

      option3: {
        title: "Most visible player",
        price: "25$/mo",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestia.",
      },
    },

    userInfo: {
      editYourProfile: "Uredite profil",
      premiumAccount: "Premium Profil",
      position: "Pozicija",
      currentClub: "Trenutni klub",
      weight: "Težina",
      height: "Visina",
      placeOfBirth: "Mesto rođenja",
      dateOfBirth: "Datum rođenja",
      info: "Informacije",
      links: "Linkovi",
      deactivate: "Deaktivirajte profil",
      activate: "Aktivirajte porofil",
      yes: "Da",
      no: "Ne",
      confirmAction: "Da li ste sigurni?",
    },

    socialShare: {
      facebook: "facebook",
      whatsapp: "whatsapp",
      viber: "viber",
      copy: "copy",
    },

    validation: {
      RequiredErrorMessage: "obavezno",
      MinLengthErrorMessage: "Minimalna dužina je ",
      MaxLengthErrorMessage: "Maksimalna dužina je ",
      EmailErrorMessage: "Molimo unesite validan e-mail",
      PasswordErrorMessage:
        "Lozinka mora sadržati najmanje 6 slova, jedno veliko slovo, jedno malo i cifru.",
      UserExistsErrorMessage: "Korisnik sa upisanim e-mailom već postoji.",
      OldPasswordDidNotMatch: "Stara lozinka se ne podudara",
      PasswordsNotEqual: "Lozinke se ne podudaraju",
      notNumber: "Unesite broj",
    },

    footer: {
      copyright: "Copyright",
      privacyPolicy: "Politika privatnosti",
      payment: "Plaćanje",
      termsOfUse: "Uslovi korišćenja",
      phone1: "+ 378 055 232 300",
      phone2: "+ 378 055 232 300",
      email: "office@handballhunter.com",
      site: "www.handballhunter.com",
    },

    registrationStep: {
      step: "Korak",
    },

    gender: {
      female: "Žena",
      male: "Muškarac",
    },

    position: {
      all: "Sve",
      goalkeeper: "Golman",
      rightWingman: "Desno krilo",
      leftWingman: "Levo krilo",
      pivot: "Pivot",
      leftBackcourt: "Levi bek",
      rightBackcourt: "Desni bek",
      centerBackcourt: "Srednji bek",
    },

    months: {
      january: "Januar",
      february: "Februar",
      march: "Mart",
      april: "April",
      may: "Maj",
      jun: "Jun",
      july: "Jul",
      august: "Avgust",
      september: "Septembar",
      october: "Octobar",
      november: "Novembar",
      december: "Decembar",
    },

    select: {
      placeholder: "Please select",
      day: "Dan",
      month: "Mesec",
      year: "Godina",
      search: "Pretraga...",
    },

    euPassport: {
      yes: "Da",
      no: "Ne",
      nevermind: "Nije bitno",
    },

    profile: {
      languages: "Jezici",
      clubs: "Klubovi",
      nationalTeams: "Reprezentacija",
      clubAwards: "Lične nagrade i dostignuća (sa klubom)",
      clubHonors: "Nagrade i dostignuća tima (sa klubom)",
      nationalTeamAwards: "Lične nagrade i dostignuća (sa reprezentacijom)",
      nationalTeamHonors: "Nagrade i dostignuća tima (sa reprezentacijom)",
      youtube: "YouTube",
      otherLinks: "Ostali linkovi",
    },

    addMore: "+ Dodajte",
    edit: "Izmenite",
    back: "Nazad",
    next: "Dalje",
    checkYourProfile: "Proverite profil",
    goToHomePage: "Idite na početnu stranicu",

    dateFormatString: "DD-MM-YYYY",
  },
});

export default strings;
