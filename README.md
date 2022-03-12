# Note-Taker
Note taker for taking and keeping notes

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete.
```
Inspiration
This was an assignment set as part of the bootcamp. To create a notepad for small business owners, using Get and Post methods and using express. 

Challenges
Many challenges! I really struggled with getting all the files to read properly - there was a consistent 404 error in the console, it wasn't picking up the server file, even though it worked fine locally. There were also issues with the GET and POST methods - which meant that although the notepad would open, there was no way to save notes. Working with several different javascript files was also a challenge as I had to keep referring back to the different files to identify where there were potential errors. Working with Heroku was initially challenging as this was the first time using the platform, but once I was able to understand how it works, I was okay with it. 

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page

The landing page opens with the first HTML, styled using CSS. The 'get started' button takes you through to the actual notepad area.

WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

The notes page opens using the second 'Notes HTML' which is linked to the 'Index HTML'. Previous notes are stored in the left hand column and there is a heading area to title notes as well as the notes area for the notes text. 

WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page

Initially, the save button is hidden, but when you put a title for the note, the save button appears. 

WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

Once the save button appears, click save, the note is saved along with all the previous notes that have been entered. There is dummy text currently stored in the notes!

WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column

WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

Once the + icon is showing, a user is able to add a new note to the application and save the note to the list of existing notes. 

The application is created using Javascript, HTML and CSS. Node Express has been used.

The application is deployed using Heroku: https://note-taker-0103.herokuapp.com/


My github repo: https://github.com/misscbrown/Note-Taker


Contact details: djmisscbrown@hotmail.com

Screenshots
![screenshot](/docs/screenshot1.png)
![screenshot](/docs/screenshot2.png)
