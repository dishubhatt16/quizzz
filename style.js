/* =========================================
   BCA BRAIN BATTLE - SCRIPT.JS
   ========================================= */


/* ---------- QUIZ DATA ---------- */

const quizData = {

    Basic: {
        Java: [
            "Java Introduction",
            "Java Syntax",
            "Data Types",
            "Operators"
        ],

        "Computer Network": [
            "Introduction to Network",
            "Network Types",
            "OSI Model",
            "Transmission Media"
        ],

        DBMS: [
            "Introduction to DBMS",
            "Keys",
            "Database",
            "SQL Basics"
        ],

        "Design Thinking": [
            "Introduction",
            "Empathy",
            "Ideation",
            "Design Thinking Process"
        ],

        Probability: [
            "Basic Probability",
            "Events",
            "Sample Space",
            "Probability Rules"
        ]
    },


    Medium: {
        Java: [
            "Classes and Objects",
            "Inheritance",
            "Polymorphism",
            "Exception Handling"
        ],

        "Computer Network": [
            "TCP/IP Model",
            "Switching",
            "Routing",
            "Network Protocols"
        ],

        DBMS: [
            "Normalization",
            "Transactions",
            "ACID Properties",
            "Relational Model"
        ],

        "Design Thinking": [
            "User Research",
            "Problem Definition",
            "Prototyping",
            "Testing"
        ],

        Probability: [
            "Conditional Probability",
            "Bayes Theorem",
            "Independent Events",
            "Random Variables"
        ]
    },


    Hard: {
        Java: [
            "Advanced OOP",
            "Multithreading",
            "Collections",
            "Advanced Exception Handling"
        ],

        "Computer Network": [
            "Advanced Routing",
            "Network Security",
            "TCP/IP Internals",
            "Network Architecture"
        ],

        DBMS: [
            "Advanced SQL",
            "Concurrency Control",
            "Database Recovery",
            "Indexing"
        ],

        "Design Thinking": [
            "Advanced User Research",
            "Complex Problem Solving",
            "Advanced Prototyping",
            "Design Evaluation"
        ],

        Probability: [
            "Advanced Probability",
            "Probability Distributions",
            "Expected Value",
            "Advanced Problems"
        ]
    }

};


/* ---------- VARIABLES ---------- */

let selectedDifficulty = "";
let selectedSubject = "";
let selectedTopic = "";


/* ---------- SELECT DIFFICULTY ---------- */

function selectLevel(level) {

    selectedDifficulty = level;

    console.log("Selected Difficulty:", level);

    alert(
        level +
        " level selected!\n\nNow choose your BCA subject."
    );

    // Scroll to subjects
    const subjectSection = document.getElementById("subjects");

    if (subjectSection) {
        subjectSection.scrollIntoView({
            behavior: "smooth"
        });
    }

}


/* ---------- SELECT SUBJECT ---------- */

function selectSubject(subject) {

    if (selectedDifficulty === "") {

        alert(
            "Please select Basic, Medium or Hard first."
        );

        return;
    }

    selectedSubject = subject;

    console.log("Difficulty:", selectedDifficulty);
    console.log("Subject:", selectedSubject);

    showTopics();

}


/* ---------- SHOW TOPICS ---------- */

function showTopics() {

    const topics =
        quizData[selectedDifficulty][selectedSubject];

    if (!topics) {

        alert(
            "Topics are not available for this subject yet."
        );

        return;
    }


    let topicMessage =
        "Difficulty: " +
        selectedDifficulty +
        "\n\n" +

        "Subject: " +
        selectedSubject +
        "\n\n" +

        "Available Topics:\n\n";


    topics.forEach(function(topic, index) {

        topicMessage +=
            (index + 1) +
            ". " +
            topic +
            "\n";

    });


    topicMessage +=
        "\nEnter the topic number to continue.";


    const choice =
        prompt(topicMessage);


    const topicNumber =
        parseInt(choice);


    if (
        isNaN(topicNumber) ||
        topicNumber < 1 ||
        topicNumber > topics.length
    ) {

        alert(
            "Please select a valid topic number."
        );

        return;
    }


    selectedTopic =
        topics[topicNumber - 1];


    startQuiz();

}


/* ---------- START QUIZ ---------- */

function startQuiz() {

    console.log(
        "Starting Quiz:",
        selectedDifficulty,
        selectedSubject,
        selectedTopic
    );


    alert(
        "Quiz Ready!\n\n" +

        "Difficulty: " +
        selectedDifficulty +

        "\nSubject: " +
        selectedSubject +

        "\nTopic: " +
        selectedTopic +

        "\n\nNext step: Quiz Page"
    );

}


/* ---------- RESET SELECTION ---------- */

function resetQuizSelection() {

    selectedDifficulty = "";
    selectedSubject = "";
    selectedTopic = "";

}


/* ---------- PAGE LOAD ---------- */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "BCA Brain Battle loaded successfully!"
        );

    }
);
