# Quiz Test

Quiz test is a site where the user can play a quiz game and test their knowledge on uncommon fruits, vegetables and dishes. This is a fully responsive website that allow users to choose between 4 answer options per question, Jump to a new question by clicking a next button and find out their final score at the end.

<img width="1317" alt="Screenshot 2023-01-19 at 21 02 25" src="https://user-images.githubusercontent.com/112895499/213589027-43e947cb-faa5-42c0-b3a5-d5dc01ae8fc9.png">

## Features 

The site consists of a start Page, a quiz page and a score box.

### Existing Features

- __The Start Page__

<img width="1512" alt="Screenshot 2023-01-19 at 20 56 24" src="https://user-images.githubusercontent.com/112895499/213589077-bea56366-e9b8-4d15-993d-6d48a21ec49d.png">

  - Being the first feature displayed once the page loads, the start page introduces the user to the quiz and displays a start button that initiates the quiz game. The start box contains all of the content of the start page, constituting a header, a small paragraph, an image and the start button.

- __The Quiz Page__

<img width="1512" alt="Screenshot 2023-01-19 at 20 57 10" src="https://user-images.githubusercontent.com/112895499/213589117-387c2133-a39e-4fd7-bd4b-c571cac37d64.png">

  - This section will allow the user to participate in the quiz. It contains a question, an image of the food mentioned and 4 option buttons that contain the possible answer to the question, a next button and a quit button.
  - The user will be able to select the option button and get a response from the site that informs if the answer selected was right or wrong. When the right option is selected an alert will appear on the screen and It's color will change to green. If the wrong button is selected, the response will be similar but the button selected will change to a red color and the right answer will be displayed in green (to inform the user of the correct answer).
  - When the next button is clicked, a new question will be displayed, followed by new option buttons and an image.

- __The Score Area__

<img width="925" alt="Screenshot 2023-01-19 at 20 57 49" src="https://user-images.githubusercontent.com/112895499/213589164-dd3f7984-b13b-4188-807a-2c7644b61a35.png">

  - This section will display the score. How many answers out of the total number the user guessed right.
  - It constitutes of a header, an animated gif, a small text with the core number and a quit button.


### Validator Testing 

- HTML
    - No errors were returned when passing through the official W3C validator.
- CSS
    - No errors were found when passing through the official Jigsaw) validator.
- JavaScript
    - No errors were found when passing through the official Jshint but 17 warnings were displayed.
      - The following metrics were returned: 
        - There are 14 functions in this file.
        - Function with the largest signature take 2 arguments, while the median is 0.
        - Largest function has 15 statements in it, while the median is 2.5.
        - The most complex function has a cyclomatic complexity value of 3 while the median is 1.
- Lighthouse and accesibility
  - This website scored:
  <img width="832" alt="Screenshot 2023-01-19 at 21 06 52" src="https://user-images.githubusercontent.com/112895499/213589411-298774f2-c490-4e20-a240-c944650fd2c1.png">

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 


## Credits 

Many of the features included on this project and how they were brought to life were inspired by:

Youtube tutorials: 
- https://youtu.be/WUBhpSRS_fk
- https://youtu.be/pQr4O1OITJo
- https://youtu.be/riDzcEQbX6k

Mentor guidance and help: 
- Mentor Akshat Garg helped building functions, creating the QUESTIONS array and structuring some of the code. 

Tutor support:
- Tutors from Code institute helped call the functions and implement features such as: desabling the option buttons after one is clicked, displaying the correct answer when the wrong one is clicked etc.

### Media

- The photos used on the start page and quiz page were taken from Google images.
- The Gif used on the score box was also taken from google images.

