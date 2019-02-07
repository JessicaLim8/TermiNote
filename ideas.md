# Ideas on how to make this app


## Idea #1: JavaScript Objects

Create javascript objects that have different properties
* Each object will be a number
* One property will include the note
* Other properties can include the list its a part of, the colour of the note, whether the point has been completed etc

### Pros
* Since it's all code, it will be easier to access things, since you don't have to communicate between different types of files, languages etc
* I know javascript sort of already
* We can call different methods for each property

### Cons
* Naming conventions will be whack
* It's gonna be tricky keeping track of all the properties
* If I have alot of note, it might get hard to read
* Other than when the info is displayed, it will be really ugly to sift through the data and see how it looks 


## Idea #2: Database

Use a database such as SQL 
* Incluse a title and then information for each note
* Kind of the way a javascript object would have boolean, or like properties 
* Each note would have a bunch properties that describe its appearance and where it appears, where it is saved etc. 
* Have different tables as well, so we can have tables for different sets of notes,  although I'm not quite sure how they work

### Pros
* Cleaner than objetcs I think
* Fits more data
* Can be read more easily
* Allows for more data to be properly stored

### Cons
* it requires communication between my laptop and a server i think
* what if i dont have internet
* I have zero clue how data bases work
* Naming is once again an issue


## Idea #3: TextFiles

Use a textfile
* Keep all notes in files corresponding to the appropriate note group I want it to be a part of
* If a new note file is made, a new file can be made
* Parse through the new files and loops through everything, indexing each line
* Rewrite the entire file every time edits are made

### Pros 
* Can be easily viewed if file is open
* I know how to read and write a text file

### Cons
* So inefficient
* Really messy
* Hard to keep data on any of the notes


