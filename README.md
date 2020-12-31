# Tsuki
A Discord Bot.

## Dev Setup
How to setup this bot on your local machine.
### Step 1: Clone This Repository
Clone this repository to obtain and run the source code.
```
git clone https://github.com/JK-Productions/Tsuki.git
```
### Step 2: Enter Folder
Enter the folder so you are in the project directory.
```
cd Tsuki
```
### Step 3: Install the Packages
Install the packages so you can run the latest dependencies.
```
npm install
```
### Step 4: Create .env
Create the .env so you can store the personal information needed for this project<br/>
Use the .env.example to help create the .env file.<br/>
Fill in the information on the .env file.
```
cp .env.example .env
```
## Running the Application For Developer
This uses nodemon so every time you make an update in the code it will update the bot.
```
npm run dev
```
## Running the Application For Production
This does not use nodemon so whatever code you have now will stay until you restart it.
```
npm start
```