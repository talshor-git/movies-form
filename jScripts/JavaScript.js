// מתחיל לעבוד כאשר האתר נטען עם כל פרטיו ומאפשר לכל הפונקציות לעבוד בסדר אקראי
document.addEventListener("DOMContentLoaded", function() {
// מכניס את כל הנתונים מהטופס במשתנים
    var nameInput = document.getElementById("nameInput");
    var movieTogether = document.getElementById("movieTogether");
    var movieHencrack = document.getElementById("movieHencrack");
    var movieSenfim = document.getElementById("movieSenfim");
    var ticket1 = document.getElementById("ticket1");
    var ticket2 = document.getElementById("ticket2");
    var ticket3 = document.getElementById("ticket3");
    var ticket4 = document.getElementById("ticket4");
    var extraPopcorn = document.getElementById("extraPopcorn");
    var extraSweets = document.getElementById("extraSweets");
    var extraNachos = document.getElementById("extraNachos");
    var submitButton = document.getElementById("submitButton");
    var confirmationMessage = document.getElementById("confirmationMessage");
    var messageText = document.getElementById("messageText");

    // הסתרת/שינוי שקיפות לחצי שקוף לכל התמונות בתחילת ההזמנה
    document.getElementById("togetherForeverPic").style.display = "none";
    document.getElementById("HencrackPic").style.display = "none";
    document.getElementById("senfimPic").style.display = "none";
    document.getElementById("chair1").style.display = "none";
    document.getElementById("chair2").style.display = "none";
    document.getElementById("chair3").style.display = "none";
    document.getElementById("chair4").style.display = "none";
    document.getElementById("popcornPic").style.opacity = "0.5";
    document.getElementById("sweetsPic").style.opacity = "0.5";
    document.getElementById("nachosPic").style.opacity = "0.5";

    // פונקציה זו מציגה את תמונת הסרט שנבחר ומסתירה את כל התמונות האחרות. כל תמונה מוצגת בהתאם לכפתור הרדיו של הסרט שנבחר
    function showMovieImage() {
        // הסתרת כל תמונות הסרטים בהתחלה
        document.getElementById("togetherForeverPic").style.display = "none";
        document.getElementById("HencrackPic").style.display = "none";
        document.getElementById("senfimPic").style.display = "none";
        // הצגת התמונה הרלוונטית לפי הבחירה של המשתמש
        if (movieTogether.checked) {
            document.getElementById("togetherForeverPic").style.display = "block";
        } else if (movieHencrack.checked) {
            document.getElementById("HencrackPic").style.display = "block";
        } else if (movieSenfim.checked) {
            document.getElementById("senfimPic").style.display = "block";
        }
    }

// פונקציה זו מציגה את התמונה של הכיסאות לפי כמות הכרטיסים שנבחרה, ומסתירה את כל התמונות האחרות
    function showTicketImage() {
        // הסתרת כל תמונות הכיסאות בהתחלה
        document.getElementById("chair1").style.display = "none";
        document.getElementById("chair2").style.display = "none";
        document.getElementById("chair3").style.display = "none";
        document.getElementById("chair4").style.display = "none";

        // הצגת התמונה המתאימה לפי כמות הכרטיסים שנבחרה
        if (ticket1.checked) {
            document.getElementById("chair1").style.display = "block";
        } else if (ticket2.checked) {
            document.getElementById("chair2").style.display = "block";
        } else if (ticket3.checked) {
            document.getElementById("chair3").style.display = "block";
        } else if (ticket4.checked) {
            document.getElementById("chair4").style.display = "block";
        }
    }


// פונקציה זו משנה שקיפות לתמונות השדרוגים שנבחרו. אם נבחרו שדרוגים, הם יקבלו צבע מלא, אחרת ישמרו על שקיפות חלקית
    function highlightExtraImages() {
        // איפוס שקיפות כל התמונות לשקיפות חלקית בהתחלה
        document.getElementById("popcornPic").style.opacity = "0.5";
        document.getElementById("sweetsPic").style.opacity = "0.5";
        document.getElementById("nachosPic").style.opacity = "0.5";

        // הדגשת התמונות שנבחרו על ידי המשתמש (על ידי הסרת השקיפות)
        if (extraPopcorn.checked) {
            document.getElementById("popcornPic").style.opacity = "1";
        }
        if (extraSweets.checked) {
            document.getElementById("sweetsPic").style.opacity = "1";
        }
        if (extraNachos.checked) {
            document.getElementById("nachosPic").style.opacity = "1";
        }
    }

// פונקציה זו מופעלת רק בלחיצה על כפתור השליחה באמצעות ליסנר, מציגה הודעת אישור עם הפרטים שהוזנו. הפרטים כוללים את שם הסרט, כמות הכרטיסים והשדרוגים שנבחרו
    submitButton.addEventListener("click", function() {
        // בדיקת איזה סרט נבחר
        var selectedMovie;

        if (movieTogether.checked) {
            selectedMovie = "Together Forever";
        } else if (movieHencrack.checked) {
            selectedMovie = "Hencrack";
        } else {
            selectedMovie = "Senfim";
        }        

        // בדיקת כמות הכרטיסים שנבחרה
        var selectedTickets;

        if (ticket1.checked) {
            selectedTickets = "1";
        } else if (ticket2.checked) {
            selectedTickets = "2";
        } else if (ticket3.checked) {
            selectedTickets = "3";
        } else {
            selectedTickets = "4";
        }
        

        // יצירת רשימת השדרוגים שנבחרו
        var selectedExtras = ""; // משתנה לאחסון התוספות שנבחרו

        // בדיקה אם תוספת פופקורן ושתייה נבחרה
        if (extraPopcorn.checked) {
            selectedExtras = "פופקורן ושתייה"; // אם נבחרה, מתחילים את המחרוזת עם תוספת זו
        }
        
        // בדיקה אם תוספת ממתקים נבחרה
        if (extraSweets.checked) {
            // אם יש כבר תוספת במחרוזת, מוסיפים פסיק ורווח לפני ממתקים
            if (selectedExtras !== "") {
                selectedExtras += ", ";
            }
            selectedExtras += "ממתקים"; // מוסיפים את התוספת ממתקים למחרוזת
        }
        
        // בדיקה אם תוספת נאצ׳וס נבחרה
        if (extraNachos.checked) {
            // אם יש כבר תוספת במחרוזת, מוסיפים פסיק ורווח לפני נאצ׳וס
            if (selectedExtras !== "") {
                selectedExtras += ", ";
            }
            selectedExtras += "נאצ׳וס"; // מוסיפים את התוספת נאצ׳וס למחרוזת
        }
        
        // אם אף אחת מהתוספות לא נבחרה, נציב במחרוזת את המילה ללא
        if (selectedExtras == "") {
            selectedExtras = "ללא"; // אם אין תוספות נבחרות, המחרוזת תהיה ללא
        }
        

        // עדכון הודעת האישור עם כל המידע שנבחר
        messageText.innerHTML = "היי " + nameInput.value + ", ההזמנה שלך כוללת:" +
            "<br>שם הסרט: " + selectedMovie +
            "<br>כמות כרטיסים: " + selectedTickets +
            "<br>שדרוגים: " + selectedExtras;
        
        // הצגת הודעת האישור
        confirmationMessage.style.display = "block";
    });

    // מאזינים לשינויים בשדות הקלט השונים ומפעילים את הפונקציות המתאימות

    // מחכה להזנה של שם בתיבת הטקסט
    nameInput.addEventListener("input", enableSubmit);
    
        // מחכה לסימון/שינוי של אחד הסרטים. במידה ומשתנה מפעיל את הפונקצייה הרלוונטית
        movieTogether.addEventListener("change", function() {
        showMovieImage();
        enableSubmit();
    });
    movieHencrack.addEventListener("change", function() {
        showMovieImage();
        enableSubmit();
    });
    movieSenfim.addEventListener("change", function() {
        showMovieImage();
        enableSubmit();
    });

        // מחכה לסימון/שינוי של אחד הכרטיסים. במידה ומשתנה מפעיל את הפונקצייה הרלוונטית
        ticket1.addEventListener("change", function() {
        showTicketImage();
        enableSubmit();
    });
    ticket2.addEventListener("change", function() {
        showTicketImage();
        enableSubmit();
    });
    ticket3.addEventListener("change", function() {
        showTicketImage();
        enableSubmit();
    });
    ticket4.addEventListener("change", function() {
        showTicketImage();
        enableSubmit();
    });

        // מחכה לסימון/שינוי של אחד התוספות. במידה ומשתנה מפעיל את הפונקצייה הרלוונטית
    extraPopcorn.addEventListener("change", highlightExtraImages);
    extraSweets.addEventListener("change", highlightExtraImages);
    extraNachos.addEventListener("change", highlightExtraImages);

    // פונקציה זו בודקת אם כל השדות מולאו ומבטלת את החסימה של כפתור השליחה 
    function enableSubmit() {
        // הגדרת הכפתור כלא זמין כברירת מחדל
        submitButton.disabled = true;
        submitButton.style.opacity = "0.5";
        submitButton.style.cursor = "not-allowed";
    
        // בדיקת כל התנאים החיוביים: שם מלא, סרט נבחר, וכמות כרטיסים נבחרה
        if (nameInput.value != "" &&
            (movieTogether.checked || movieHencrack.checked || movieSenfim.checked) &&
            (ticket1.checked || ticket2.checked || ticket3.checked || ticket4.checked)) {
            
            // אם כל התנאים מתקיימים, הכפתור הופך לזמין
            submitButton.disabled = false;
            submitButton.style.opacity = "1";
            submitButton.style.cursor = "pointer";
        }
    }
});
