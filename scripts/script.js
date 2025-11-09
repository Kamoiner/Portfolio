Home = `<div class = "sidebox" onClick="SetCon(HomeCon)"> Home </div>`;

HomeCon = `<p style="font-size: 150%; display: block; text-align: center; margin: auto; width: 80%;">
This website is a representation of some of the work that I have done. 
<br>
My resume is available via the resume tab, you can read a little bit about me on the about me page, and you can 
find some examples of my work via the projects tab where you can then navigate between projects through the selections on the sidebar.
</p>`;

HowNav = `This is how to navigate`;

Resume =`<div class = "sidebox"> Resume </div>`;

ResCon = `<div>
<h2>Zachary Paluck</h4>
<h4>Indio, CA | (442)-256-0115 | Zachary.Paluck2@gmail.com <a href="http://www.linkedin.com/in/zacharypaluck">http://www.linkedin.com/in/zacharypaluck</a></h2>

<p>
<h2>Objective:</h2>
<hr/>
Adaptive and resourceful computer science graduate with an interest in data science and information technology seeking
to expand skillset in a professional setting.
</p>

<br>

<p>
<h2>Education:</h2>
<hr/>
<h3>CALIFORNIA STATE UNIVERSITY SAN BERNARDINO</h3>
<h4>BACHELOR OF SCIENCE - COMPUTER SCIENCE MAJOR - DATA SCIENCE MINOR</h4>
<h4>August 2021 - August 2025</h4>
3.823 GPA
<br><br>
Related Coursework: Database Systems, Machine Learning, Software Engineering, Algorithm
Analysis, Intro to AI, Networking and Security
</p>

<br>

<p>
<h2>Work Experience:</h2>
<hr/>
<h3>GENERAL MERCHANDISE EXPERT | TARGET | JUNE 2022 - PRESENT</h3>
General employee tasked with performing daily tasks as part of a coordinated team with an emphasis
on planning, organization, and team management skills.
</p>

<br>

<p>
<h2>Skills:</h2>
<hr/>
<h3>Languages:</h3>
Python, C++, JavaScript, HTML, CSS, XAML, SQL
<h3>Tools:</h3>
Node.js, Firebase, Qt, Linux, React, R, Pandas, Scikit-Learn, TensorFlow, Excel, MySQL,
Visual Studio Code
</p>

</div>`;

About = `<div class = "sidebox"> About Me </div>`;

AbCon = 
`<div style="display: block; margin: auto; width: 80%;">
<img src="Assets\\1707198123322.jpg"; width = 200px; height = 200px;>
<br>
From a young age I had always enjoyed puzzles and math and I found that I had a certain proclivity 
for them. Over time this grew and my understanding of my love for them deepened into a love of 
problem solving. I had always been immersed in technology and as such I found the natural 
conclusion of my aptitude for problem solving and my love of technology was computer science.

<br><br>

I have usually found wrapping my head around more complex or abstract systems pretty natural and 
fun. Even if I have trouble understanding certain aspects of something the process of learning 
how it works individually is deeply rewarding and being able to apply that new understanding to the whole 
picture is equally rewarding and delivers a certain satisfaction. Using specific bit of information on how 
something works and then creating a plan of action using those little optimized bits to acheive 
exceptional results is something that I enjoy in many facets of life. An overused simile would be 
like setting up a line of dominos to watch them fall. Be it in how I spend a day, how I cook, 
coding, in puzzles, or at work, seeing the direct results of small actions is fun.

<br><br>

This combination of problem solving, inclination to learn and understand new systems, and my fondness of 
the delicate relationship between actions and an intended result are why I gravitated to computer science, 
and why I am eager to explore a career in the field. 
</div>`;

Projects = `<div class = "sidebox" onClick="SetCon(TTT)"> Tic-Tac-Toe AI </div>
<div class = "sidebox" onClick="SetCon(FFB)"> Feather Finder </div>
<div class = "sidebox" onClick="SetCon(MLR)"> Machine Learning Rice Identification </div>`;

TTT = `<div class="sbs">
<p>This python project is a version of the classic game Tic-Tac-Toe with an AI opponent 
that will try to at least tie the game. There is an extra twist with the game in that the 
size of the board can be changed via the slider. This addition means the game will not end once 
somebody scores so both scoring and blocking the opponent scoring are key.

<br><br>

I implemented the agent using a Minmax and Negamax algorithm with alpha-beta pruning with the AI
agent predicting future plays for an arbitrary number of future turns to decide its move. 
The game interface is made using the pygame library with one of my favorite parts of making it 
being implementing the sldier as the offshoot library which would handle this was depreciated so 
I had to create a slider mechanic from scrath using the tools from the base pygame library.

<br><br>

As the boards get larger the agent may take longer to move depending on the number of turns the agent looks ahead. 
This could potentially be circumveneted by inceasing the numbers of moves the agent looks 
ahead at as the board gets filled in or through optimization of the score calculation. 
In addition to the AI agent there is also an option to have a human player two so 
that two human players can take turns placing marks. Along with this player 1 
is able to choose to play with X's or O's.</p>

<video widths="400px" height="600px" src="Assets\\TicTacToeAI.mp4" controls></video>
</div>`;

FFB = `<div>
<p> Feather Finder is an AI bird identification application of which I worked on as part of a 
team of around 8 people. The purpose of the application was to have registered users input
images of birds for which our AI model would identify with an accompanying certainty percentage.
</p>

<br>

<img height="auto" width="75%" src="Assets\\FeatherFinderHome.png"/>

<p> My role in the project was to establish a backend for the application. To this end I learned 
and implemented three different methodologies. For the backend structure I utilized NodeJs along with
Firebase as our database. For the front end portion I set up the bones for a React based frontend. 
Once the base of the project was set up I then implemented the working feature of the website to be
later connected with the work of the AI developing portion of the team and the frontend design team. 
All of the work performed with this team was done using Agile development processes with our team frequently 
meeting to evaluate the progress and assignment of tasks.</p>

<br>

<img height="auto" width="75%" src="Assets\\FeatherFinderSearchPage.png"/>

</div>`;

MLR = `<div class="sbs">
<p>Using data from the UCI Machine Learning Repository I utilized two different machine learning models to 
differentiate two different grains of rice. The data consists of features of photos of either Cammeo or 
Osmancik grains of rice. From this I used the pandas and sklearn python libraries to clean the data for use in 
the two different models. Through training a linear regression model and a KNN model the results were around 95% 
accuracy in identifying the grains for each model which was satisfactory considering the limitiations of my 
available setup.</p>
<img src="Assets\\rice.png"/>
</div>
<img style="display: block; margin: auto; width: 50%;" src="Assets\\confusion.png"/>
<object
    style="display: block; margin: auto; width: 90%; height: 1000px;"
    type="application/pdf"
    data="Assets\\RiceML.pdf">
</object>`;


ProCon = `Projects`;

/*CPP =`<div class = "sidebox"> C++ Test 1 </div>
    <div class = "sidebox"> C++ Test 2 </div>`;

Py =`<div class = "sidebox"> Python Test 1 </div>
    <div class = "sidebox"> Python Test 2 </div>`;

JS = `<div class = "sidebox"> JavaScript Test 1 </div>
    <div class = "sidebox"> JavaScript Test 2 </div>`;

ML = `<div class = "sidebox"> Machine Learning Test 1 </div>
    <div class = "sidebox"> Machine Learning Test 2 </div>`;

AI = `<div class = "sidebox" onclick="location.href='https://www.w3schools.com/html/tryit.asp?filename=tryhtml_script_html';"> AI Test 1 </div>
        <div class = "sidebox"> AI Test 2 </div>`;*/
function SetCon(con){
    document.getElementById("content").innerHTML = con;
}

function SetSite(cat, con){
    document.getElementById("sidebar").innerHTML = cat;
    SetCon(con);
}

SetSite(Home, HomeCon);