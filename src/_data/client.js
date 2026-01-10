module.exports = {
    name: "KhemsAutoCare",
    email: "Khemsautocare@gmail.com",
    phoneForTel: "609-401-9715",
    phoneFormatted: "(609) 401-9715",
    address: {
        city: "Jamaica",
        state: "NY",
        country: "US",
    },
    socials: {
        google: "https://share.google/NGsACe4gqnz1oCvgw",
        facebook: "https://www.facebook.com/profile.php?id=61550481426400&mibextid=D4KYlr",
        instagram: "https://www.instagram.com/khemsautocare",
        tiktok: "https://www.tiktok.com/@khemsautocare",
        youtube: "https://www.youtube.com/@Khemsautocare",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
