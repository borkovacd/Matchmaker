import LocalizedStrings from "react-localization";

let strings = new LocalizedStrings({
  en: {
    menu: {
      Home: "Serb, get married!",
      About: "About",
      Register: "Sign Up",
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
      wrongCredentials: "Wrong login data",
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
      years: "Years",
      emailExists: "Email exists!",
    },

    registrationForm2: {
      title: "Profile",
      add: "Add Photo",
      description:
        "Photo size must not exceed 10MB and width X height must not be more than 6000px X 6000px",
      upload: "Upload",
      skip: "Skip",
    },

    countries: {
      rs: "Serbia",
      gb: "Great Britain",
      de: "Germany",
    },

    quickSearch: {
      title: "Quick search:",
      gender: "I am:",
      intrestedInGender: "Seeking:",
      intrestedInAge: "Between ages:",
      and: "and",
      search: "Search",
      signUp: "Sign Up",
      signUpWith: "Sign up with:",
    },

    searchResults: {
      findMatch: "Finding your perfect match has never been easier!",
      title: "Search Results",
      searchResults: "Search results:",
      membersOnline: "Members online:",
      orderBy: "Order by:",
      quickSearch: "Quick Search Filter",
      pages: " pages",
    },

    user: {
      lastActive: "Last active:",
      yearsOld: " years old",
      before: "Before ",
      minutes: " mins",
      village: "Village ",
      searchFor: "Search for ",
      from: " from ",
      to: " to ",
      photo: " Photo",
      seeAllPhotos: "See all photos",
      country: "Country",
      sendMessage: "Send a message",
      chat: "Chat",
      addToHotList: "Add to hot list",
      sendKiss: "Send a kiss",
      sendGift: "Send a gift",
      myDescription: "My description",
      lookingForInPartner: "Looking for in a partner",
      myInterests: "My interests",
      nationality: "Nationality",
      languages: "Languages",
      height: "Height",
      weight: "Weight",
      figure: "Figure",
      hair: "Hair",
      hairLength: "Hair length",
      eyes: "Eyes",
      ethnicOrigin: "Ethnic origin",
      religion: "Religion",
      academicDegree: "Academic degree",
      profession: "Profession",
      income: "Income",
      maritalStatus: "Marital status",
      children: "Children",
      smokingHabits: "Smoking habits",
      drinkingHabits: "Drinking habits",
      zodiac: "Zodiac",
    },

    userInterests: {
      arts: "Arts",
      kitchen: "Kitchen",
      oddJobs: "Odd jobs",
      theater: "Theater",
      cars: "Cars",
      lecture: "Lecture",
      painting: "Painting",
      travels: "Travels",
      cinema: "Cinema",
      literature: "Literature",
      restaurant: "Restaurant",
      tv: "TV",
      dance: "Dance",
      museum: "Museum",
      shopping: "Shopping",
      internet: "Internet",
      animals: "Animals",
      sport: "Sport",
    },

    gender: {
      female: "Female",
      male: "Male",
    },

    relationship: {
      friendship: "Friendship",
      marriage: "Marriage",
      romance: "Romance",
      relationship: "Relationship",
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

    blogs: {
      blogPage: "Blog Page",
      readMore: "Read more..",
      relatedPosts: "Related Posts",
      loadMore: "Load more",
    },

    footer: {
      partners: "Technical partners",
      copyright: "Copyright Lilly021. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsAndConditions: "Terms & Conditions",
      helpCenter: "Help Center",
    },

    home: {
      viewMore: "View more",
      newPeople: "New People",
      beuty: "Beauty of Serbia villages",
      findYourMatch: "Find your match",
      blogs: "Serbian Blogs",
      blogsButton: "Go to the page",
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

    countries: {
      rs: "Serbien",
      gb: "Großbritannien",
      de: "Deutschland",
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
      wrongCredentials: "Falsche Zugangsdaten",
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
      years: "Jahre",
      emailExists: "Email existiert!",
    },

    registrationForm2: {
      title: "Profil",
      add: "Foto hinzufügen",
      description:
        "Die Fotogröße darf 10 MB nicht überschreiten und die Breite x Höhe darf 6000px x 6000px nicht überschreiten",
      upload: "Hochladen",
      skip: "Überspringen",
    },

    quickSearch: {
      title: "Schnellsuche:",
      gender: "Ich bin:",
      intrestedInGender: "Suchen:",
      intrestedInAge: "Zwischen Zeitaltern:",
      and: "und",
      search: "Suchen",
      signUp: "Registrieren",
      signUpWith: "Registrieren mit:",
    },

    searchResults: {
      findMatch:
        "Es war noch nie einfacher, die perfekte Übereinstimmung zu finden!",
      title: "Suchergebnisse",
      searchResults: "Suchergebnisse:",
      membersOnline: "Mitglieder online:",
      orderBy: "Sortieren nach:",
      quickSearch: "Schnellsuchfilter",
      pages: " Seiten",
    },

    relationship: {
      friendship: "Freundschaft",
      marriage: "Ehe",
      romance: "Romanze",
      relationship: "Beziehung",
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

    blogs: {
      blogPage: "Blog-Seite",
      readMore: "Weiterlesen..",
      relatedPosts: "Zusammenhängende Posts",
      loadMore: "Mehr laden",
    },

    footer: {
      partners: "Technische Partner",
      copyright: "Urheberrechte Lilly021. Alle Rechte vorbehalten.",
      privacyPolicy: "Datenschutz-Bestimmungen",
      termsAndConditions: "Geschäftsbedingungen",
      helpCenter: "Hilfezentrum",
    },

    user: {
      lastActive: "Zuletzt aktiv:",
      yearsOld: " Jahre alt",
      before: "Vor ",
      minutes: " Minuten",
      village: "Dorf ",
      searchFor: "Suche nach ",
      from: " von ",
      to: " bis ",
      photo: " Foto",
      seeAllPhotos: "Alle Fotos anzeigen",
      country: "Land",
      sendMessage: "Nachricht senden",
      chat: "Chat",
      addToHotList: "Zur Hotlist hinzufügen",
      sendKiss: "Sende einen Kuss",
      sendGift: "Sende ein Geschenk",
      myDescription: "Meine Beschreibung",
      lookingForInPartner: "Im Partner suchen nach",
      myInterests: "Meine Interessen",
      nationality: "Nationalität",
      languages: "Sprachen",
      height: "Höhe",
      weight: "Gewicht",
      figure: "Abbildung",
      hair: "Haare",
      hairLength: "Haarlänge",
      eyes: "Augen",
      ethnicOrigin: "Ethnische Herkunft",
      religion: "Religion",
      academicDegree: "Hochschulabschluss",
      profession: "Beruf",
      income: "Einkommen",
      maritalStatus: "Familienstand",
      children: "Kinder",
      smokingHabits: "Rauchgewohnheiten",
      drinkingHabits: "Trinkgewohnheiten",
      zodiac: "Tierkreis",
    },

    userInterests: {
      arts: "Kunst",
      kitchen: "Küche",
      oddJobs: "Gelegenheitsjobs",
      theater: "Theater",
      cars: "Autos",
      lecture: "Vorlesung",
      painting: "Malerei",
      travels: "Reisen",
      cinema: "Kino",
      literature: "Literatur",
      restaurant: "Restaurant",
      tv: "TV",
      dance: "Tanzen",
      museum: "Museum",
      shopping: "Einkaufen",
      internet: "Internet",
      animals: "Tiere",
      sport: "Sport",
    },

    home: {
      viewMore: "Mehr sehen",
      newPeople: "Neue Leute",
      beuty: "Schönheit der serbischen Dörfer",
      findYourMatch: "Finde dein Match",
      blogs: "Serbische Blogs",
      blogsButton: "Gehen Sie zur Seite",
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

    gender: {
      female: "Weiblich",
      male: "Männlich",
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

    countries: {
      rs: "Srbija",
      gb: "Velika Britanija",
      de: "Nemačka",
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
      wrongCredentials: "Pogrešni podaci za prijavu",
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
      years: "Godine",
      emailExists: "Email već postoji!",
    },

    registrationForm2: {
      title: "Profil",
      add: "Dodajte sliku",
      description:
        "Veličina slike ne sme biti veća od 10MB i širina X visina ne sme biti veća od 6000px X 6000px",
      upload: "Otpremi",
      skip: "Preskoči",
    },

    quickSearch: {
      title: "Brza pretraga:",
      gender: "Ja sam:",
      intrestedInGender: "Tražim:",
      intrestedInAge: "Starosti između:",
      and: "i",
      search: "Traži",
      signUp: "Registrujte se",
      signUpWith: "Registrujte se sa:",
    },

    searchResults: {
      findMatch: "Nalaženje savršenog podudaranja nikada nije bilo lakše!",
      title: "Rezultati pretrage",
      searchResults: "Rezultati pretrage:",
      membersOnline: "Korisnici na mreži:",
      orderBy: "Sortiraj:",
      quickSearch: "Filter za brzu pretragu",
      pages: " strane",
    },

    relationship: {
      friendship: "Prijateljstvo",
      marriage: "Brak",
      romance: "Romansa",
      relationship: "Veza",
    },

    user: {
      lastActive: "Poslednja aktivnost:",
      yearsOld: " godina",
      before: "Pre ",
      minutes: " minuta",
      village: "Selo ",
      searchFor: "Traži ",
      from: " od ",
      to: " do ",
      photo: " Slika",
      seeAllPhotos: "Pogledajte sve slike",
      country: "Država",
      sendMessage: "Pošaljite poruku",
      chat: "Dopisivanje",
      addToHotList: "Dodajte na HOT listu",
      sendKiss: "Pošaljite poljubac",
      sendGift: "Pošaljite poklon",
      myDescription: "Moj opis",
      lookingForInPartner: "Tražim u partneru",
      myInterests: "Moja interesovanja",
      nationality: "Nacionalnost",
      languages: "Jezici",
      height: "Visina",
      weight: "Težina",
      figure: "Figure",
      hair: "Boja kosa",
      hairLength: "Dužina kose",
      eyes: "Oči",
      ethnicOrigin: "Etničko poreklo",
      religion: "Religija",
      academicDegree: "Akademska diploma",
      profession: "Profesija",
      income: "Primanja",
      maritalStatus: "Bračno stanje",
      children: "Deca",
      smokingHabits: "Pušač?",
      drinkingHabits: "Konzumirate alkohol?",
      zodiac: "Horoskop",
    },

    userInterests: {
      arts: "Umetnost",
      kitchen: "Kuhinja",
      oddJobs: "Sitni poslovi",
      theater: "Pozorište",
      cars: "Automobili",
      lecture: "Predavanje",
      painting: "Slikanje",
      travels: "Putovanje",
      cinema: "Bioskop",
      literature: "Književnost",
      restaurant: "Restoran",
      tv: "TV",
      dance: "Ples",
      museum: "Muzej",
      shopping: "Šoping",
      internet: "Internet",
      animals: "Životinje",
      sport: "Sport",
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

    blogs: {
      blogPage: "Blog stranica",
      readMore: "Pročitajte više..",
      relatedPosts: "Povezane objave",
      loadMore: "Učitajte više",
    },

    home: {
      viewMore: "Vidite više",
      newPeople: "Novi korisnici",
      beuty: "Lepote srpskih sela",
      findYourMatch: "Nađite svoj par",
      blogs: "Blogovi iz Srbije",
      blogsButton: "Idite na stranicu",
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
      partners: "Tehnički partneri",
      copyright: "Autorska prava Lilly021. Sva prava zadržana.",
      privacyPolicy: "Politika privatnosti",
      helpCenter: "Centar za pomoć",
      termsAndConditions: "Uslovi korišćenja",
    },

    gender: {
      female: "Žena",
      male: "Muškarac",
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
  },
});

export default strings;
