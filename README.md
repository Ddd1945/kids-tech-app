# Kids Tech App

There is an API endpoint
GET https://logiclike.com/docs/courses.json
The endpoint API returns a list of platform educational courses. Each course
has “tags”, topics to which this course relates. For example, a chess course refers to
topics “Puzzles”, “Chess” and “Logic and Thinking”.
Your task is to develop a simple page, according to the layout, that displays a list
courses and allows you to filter courses by selected topic (tags). All content
including the list of topics should be generated dynamically based on the response from the backend

Behavior at different screen resolutions is shown as a separate frame. Block with
“tags” is fixed in width. The block on the right takes up everything else
place. Exactly 3 courses are displayed in one line, which are divided among themselves
accessible place.

# Deployment

### `npm run dev`

starts a local web server with HMR for development

### `npm run build`

builds the project, and outputs to the folder ./dist

### `npm run preview`

start a local web server that serves the built solution from ./dist for previewing

### `npm run pages`

upload/update build to the github branch `gh-pages`

# Task

App contains sections of courses that should be filtered and displayed accordingly to data that comes from endpoint GET https://logiclike.com/docs/courses.json.

# Screenshots

### Display of courses for tag "All topics". With every navigation to the page every card will randomly update its color

![image](https://github.com/Ddd1945/kids-tech-app/assets/88478851/8ed9fb5a-5a83-4dc1-882c-9efb2275af9e)

### Display of courses for tag "Trips". Consider that current api does not return any data for this tag thus "no data" text animation will be displayed. With every navigation to the page new emoji is being displayed

![cowabanga](https://github.com/Ddd1945/kids-tech-app/assets/88478851/48226452-70de-495e-b049-9882f9ce885a)

### 404 page. Displayed in case if user navigated to incorrect route. After clicking on button user will get navigated to the main page

![Untitled](https://github.com/Ddd1945/kids-tech-app/assets/88478851/1308860e-b742-4650-9c86-470d1ee9c9cd)

# Note

I've used redux to store choosen tag index in cache. I found it more convinient for user to stay on the same tag after reopening, refreshing or using new session for page.
