(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{342:function(t,a,e){t.exports=e.p+"assets/img/fig_1.859ae8a2.png"},371:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"week-9-managing-data-in-firebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#week-9-managing-data-in-firebase","aria-hidden":"true"}},[t._v("#")]),t._v(" Week 9 -  Managing Data In Firebase")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("h2",{attrs:{id:"session-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v(" Session Dependencies")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://github.com/joeappleton18/web-dev-industry-practical",target:"_blank",rel:"noopener noreferrer"}},[t._v("Make sure that you have the latest of the ongoing class, fitness tracker, project. "),s("strong",[t._v("The notes for this week refer extensively to this project")]),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("This week's, and future, setups are a little more involved. You will need to ensure that you add your own firebase credentials.  The "),s("code",[t._v("README.md")]),t._v(" file on my version of the fitness tracker walks you through how to do this.")])]),t._v(" "),s("h3",{attrs:{id:"essential-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#essential-reading","aria-hidden":"true"}},[t._v("#")]),t._v(" Essential Reading 📕")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("ul",[s("li",[s("a",{attrs:{href:"https://firebase.google.com/docs/firestore",target:"_blank",rel:"noopener noreferrer"}},[t._v("The cloud firestore overview"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://firebase.google.com/docs/firestore/data-model",target:"_blank",rel:"noopener noreferrer"}},[t._v("The cloud firestore data model"),s("OutboundLink")],1)])])]),t._v(" "),s("h3",{attrs:{id:"optional-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optional-reading","aria-hidden":"true"}},[t._v("#")]),t._v(" Optional Reading 📕")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("ul",[s("li",[s("a",{attrs:{href:"https://www.youtube.com/watch?v=G04w_k3TPTs&t=131s",target:"_blank",rel:"noopener noreferrer"}},[t._v("Not reading but watching, this is a tutorial by Tod, the firebase developer advocate, on structuring firebase data. I suggest you jump to the sections on data structuring"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("As always, when the topic focuses on the latest programming, this week is going to be interesting. We are going to be exploring cloud Firestore, the database offering by Firebase.")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("Do not confuse Firestore with the Realtime Database. The Realtime database is a older, more simplistic, database product. For new projects you should be using Firestore.")])]),t._v(" "),s("h2",{attrs:{id:"a-little-bit-about-the-firestore-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-little-bit-about-the-firestore-database","aria-hidden":"true"}},[t._v("#")]),t._v(" A little bit about the Firestore database")]),t._v(" "),s("p",[t._v("Cloud Firestore is a schemaless NoSQL-database.   There are three main types of NoSQL-databases: document-based, column-based and graph-base.  Cloud Firestore is of the document-based variety.")]),t._v(" "),s("p",[t._v("In a document-based database, your application's data is stored in documents. If you come from a relational database world, collections are like tables. These documents are then assigned to collections. If your application requires it, you can also structure subcollections within documents.  We will explore how this works through examples.")]),t._v(" "),s("p",[t._v("One of the fundamental rules of NoSQL is we try and represent data from a user-first perspective. In other words,  we want to structure our data so it can be simply displayed in our application's users interface, we sacrifice data integrity for readability. This is not as bad as it sounds, as let's face it, most web application data is not safety or business-critical.   In summary, this approach makes our database intuitive and easy to understand.")]),t._v(" "),s("h2",{attrs:{id:"setting-up-the-firestore-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-firestore-database","aria-hidden":"true"}},[t._v("#")]),t._v(" Setting up the Firestore Database")]),t._v(" "),s("p",[s("img",{attrs:{src:e(342),alt:""}})]),t._v(" "),s("blockquote",[s("blockquote",[s("p",[t._v("Figure 1, creating a database")])])]),t._v(" "),s("p",[t._v("Creating a database for your project is simple:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("In your firebase project, select Database from the left-hand-side, develop menu section")])]),t._v(" "),s("li",[s("p",[t._v("Next, click the "),s("code",[t._v("Create database")])])]),t._v(" "),s("li",[s("p",[t._v("We want to start off in test mode, so select this option when prompted")])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("h2",{attrs:{id:"task-1-setting-up-a-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-1-setting-up-a-database","aria-hidden":"true"}},[t._v("#")]),t._v(" Task 1 - Setting up a database")]),t._v(" "),s("p",[t._v('Follow the steps above to set up your database - ensure that you set it up in "test" mode.')])]),t._v(" "),s("h2",{attrs:{id:"structuring-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#structuring-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Structuring Data")]),t._v(" "),s("p",[t._v("Remember, the data in our database is created from the perspective of a user. To highlight this point let's consider, first, our check-in functionality.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("h2",{attrs:{id:"task-2-exploring-the-check-in-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-2-exploring-the-check-in-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Task 2 - Exploring the check-in data")]),t._v(" "),s("ul",[s("li",[t._v("Log-in to your application")]),t._v(" "),s("li",[t._v("Navigate to the "),s("code",[t._v("/checkin")]),t._v(". You can use the link in the menu or just type the URL in")]),t._v(" "),s("li",[t._v("Next, within "),s("code",[t._v("Views/Checkin.js")]),t._v(" work out how to set up a "),s("code",[t._v("handleSubmit")]),t._v(" function that logs to the console the checkin.")])]),t._v(" "),s("HiddenSection",{attrs:{"display-text":"click me for a hint"}},[s("ul",[s("li",[s("p",[t._v("Add a  "),s("code",[t._v("onSubmit()")]),t._v(" event handler to the CheckInForm component: "),s("code",[t._v("<CheckinForm onSubmit={handleSubmit}/>")])])]),t._v(" "),s("li",[s("p",[t._v("Set up an event handler function within your Checkin function:")])])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Checkin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handleSubmit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("checkin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("checkin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])])])],1),t._v(" "),s("p",[t._v("On completing the above task you will have seen that our check-in data looks like this:")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        exercise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n        veg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n        water"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        diet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n        comment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("\n        total"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n        drinkPen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n        foodPen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("The above data structure is close to resembling a document that could be stored in our database. However, consider our application's main dash and you can see that we do not have enough information to display a check-in.  For now, I am most concerned that we are missing a userName, userId and photo. This information needs to be added to our check-in object.")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("You may think, why not just add a userId to our check-in and we could look the rest up.\nRemember, though, we are optimising for quick reads and data structures that resemble our UI. Yes, we are duplicating data; however, this idea, know as denormalisation, is fine in the NoSQL world.")])]),t._v(" "),s("p",[t._v("With the above mantras in mind we want to create the following data structure:")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        exercise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n        veg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n        water"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        diet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n        comment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("\n        total"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n        drinkPen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n        foodPen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// additional fields ")]),t._v("\n        photo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"joephotourl"')]),t._v("\n        userName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"joe appleton"')]),t._v("\n        useId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vDyPgsU41CMrFK29bmN4lULK6JN2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wed Mar 18 2020 10:03:31 GMT+0000 (Greenwich Mean Time)"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("div",{staticClass:"tip custom-block"},[s("h2",{attrs:{id:"task-3-denormalisation-of-the-checkin-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-3-denormalisation-of-the-checkin-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Task 3 - Denormalisation of the checkin data")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Can you structure our current checkin object so it resembles our data structure above")])]),t._v(" "),s("li",[s("p",[t._v("First, you will need to pass our user from App.js down to our Checkin component.")]),t._v(" "),s("ul",[s("li",[t._v("In "),s("code",[t._v("App.js")]),t._v(" pass our user, which has been exported from useAuth, into the checkin component  "),s("code",[t._v("<Checkin createCheckin={createCheckin} user={user} />")])]),t._v(" "),s("li",[t._v("Within checkin, set up a "),s("code",[t._v("user")]),t._v(" "),s("code",[t._v("prop-type")])]),t._v(" "),s("li",[t._v("See if you can amend the "),s("code",[t._v("handleSubmit")]),t._v(" function so it adds the extra user fields to our checkin object when the form submits.")]),t._v(" "),s("li",[t._v("There is a slight gotcha, if someone has signed up using email or Google they may not have a userName in which case we want to use their email instead (users always have an email).  In JavaScript, you can use the following technique to assign a default value:")])]),t._v(" "),s("p",[s("code",[t._v("const userName = user.displayName || user.email")]),t._v(";")])])]),t._v(" "),s("HiddenSection",{attrs:{"display-text":"hint"}},[s("pre",[s("code",[t._v("```JavaScript\n\nconst handleSubmit =  async checkin => {\n\n    const ckin = {...checkin, ...{photo: user.photoURL, userId: user.uid, userName: user.displayName || user.email, time: new Date()}}\n    createCheckin(ckin);\n}\n```\n")])])])],1),t._v(" "),s("h2",{attrs:{id:"reading-and-writing-to-our-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-and-writing-to-our-database","aria-hidden":"true"}},[t._v("#")]),t._v(" Reading and Writing to Our Database")]),t._v(" "),s("h2",{attrs:{id:"writing-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Writing Data")]),t._v(" "),s("p",[t._v("To use the firestore database in our application, we first need to import it.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Within "),s("code",[t._v("/src/App.js")]),t._v(" add "),s("code",[t._v('import "firebase/firestore";')]),t._v(" to your imports. Make sure it is after the firebase import.")])]),t._v(" "),s("li",[s("p",[t._v("Next, we are going to create a "),s("code",[t._v("useCheckin")]),t._v(" service hook that will manage our check-in's collection. Notice, how we are structuring our data around our application logic. NoSQL databases provide us with the flexibility to do this.")])]),t._v(" "),s("li",[s("p",[t._v("Create a "),s("code",[t._v("src/services/firebase/useCheckin.js")]),t._v(" file and add the following code:")])])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useEffect "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useHistory "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-router-dom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("collection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'checkins'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("createCheckin")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("checkin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" ref"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("checkin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("readCheckins")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" ref"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("createCheckin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" readCheckins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" useAuth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Let's unpack what we are doing above:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("fStore")]),t._v(" is a reference to our database that will be passed in by app")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("const ref = fStore().collection('checkins');")]),t._v(" is a pointer to a checkins collection in our database. If the collection does not exist it will be created, it will be automatically created when the first document is written to the collection")])]),t._v(" "),s("li",[s("p",[t._v("We then use the above ref set up functions to add a new checkin "),s("code",[t._v("ref.add(checkin);")]),t._v(" and also to read our all of the checkin documents from our collection "),s("code",[t._v("ref.get();")])])]),t._v(" "),s("li",[s("p",[t._v("Finally, we return our functions so they can be used in other components: "),s("code",[t._v("return {createCheckin, readCheckins}")])])]),t._v(" "),s("li",[s("p",[t._v("We are now ready to use our checkin hook in our "),s("code",[t._v("src/App.js")]),t._v(" component:")]),t._v(" "),s("ul",[s("li",[t._v("If you have not done so already, "),s("code",[t._v('import "firebase/firestore";')])]),t._v(" "),s("li",[t._v("Also, import the checkIn hook: "),s("code",[t._v('import useCheckin from "./services/firebase/useCheckin";')])]),t._v(" "),s("li",[t._v("Finally, within your app component, call your checkin hook like this:")])])]),t._v(" "),s("li",[s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        createCheckin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        readCheckins\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useCheckin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firebase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firestore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\n")])])]),s("div",{staticClass:"tip custom-block"},[s("h2",{attrs:{id:"task-4-make-your-first-database-write"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-4-make-your-first-database-write","aria-hidden":"true"}},[t._v("#")]),t._v(" Task 4 - Make your first database write")]),t._v(" "),s("ul",[s("li",[t._v("Pass the  "),s("code",[t._v("createCheckin")]),t._v(" function down to our checkIn view as a prop")]),t._v(" "),s("li",[t._v("Add the necessary proptypes")]),t._v(" "),s("li",[t._v("See if you can write a checkin to the database")])]),t._v(" "),s("HiddenSection",{attrs:{"display-text":"hint 1"}},[s("pre",[s("code",[t._v("         <Checkin  createCheckin={createCheckin}  user={user} />\n")])])]),t._v(" "),s("ul",[s("li",[t._v("This is what my final Checkin component looks like:")])])],1)])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Checkin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createCheckin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handleSubmit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("checkin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ckin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("checkin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("photo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("photoURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCheckin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ckin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])]),s("p",[t._v("If the above worked, you should now have data in your database. Let's, finally, consider how to read the data.")]),t._v(" "),s("h2",{attrs:{id:"reading-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Reading Data")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Let's see if we can pull our checkins into our dash. First, from within our "),s("code",[t._v("App.js")]),t._v(" component , we need to pass "),s("code",[t._v("readCheckins")]),t._v(" into our dash component "),s("code",[t._v("<Dash readCheckins={readCheckins} checkins={checkins} />")])])]),t._v(" "),s("li",[s("p",[t._v("Within our "),s("code",[t._v("Views/Dash.js")]),t._v(" component we need to grab "),s("code",[t._v("readCheckins")]),t._v(" from our props")])])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Dash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("checkins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" readCheckins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("ul",[s("li",[t._v("Next we should set up some state to hold our checkins")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("allCheckins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setAllCheckins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("Finally we can set up an effect that calls our "),s("code",[t._v("readCheckins")]),t._v(" function")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getAllCheckins")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" aCheckins "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readCheckins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" checkins "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      aCheckins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" checkins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAllCheckins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("checkins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllCheckins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("ul",[s("li",[s("p",[t._v("Notice how I set up a nested async function within the useEffect function - which I immediately call. This is because React advises against making the useEffect function async as it could delay the render time.")])]),t._v(" "),s("li",[s("p",[t._v("Firebase does not return our collection's data, instead, it provides a references to the data. The collection reference returned, provides us with a "),s("code",[t._v("forEach")]),t._v(" method, which I use to construct a checkins array and set the value of that array to our "),s("code",[t._v("allCheckins")]),t._v(" state.")])])]),t._v(" "),s("h2",{attrs:{id:"home-study"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#home-study","aria-hidden":"true"}},[t._v("#")]),t._v(" Home Study")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("h2",{attrs:{id:"task-5-denormalisation-of-the-checkin-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-5-denormalisation-of-the-checkin-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Task 5 - Denormalisation of the checkin data")]),t._v(" "),s("ul",[s("li",[t._v("Can you update the dash so it displays checkins from our database")]),t._v(" "),s("li",[t._v("At the moment you will still need to use placeholder data for the histogram, we'll solve this issue next week.")])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("h2",{attrs:{id:"task-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-6","aria-hidden":"true"}},[t._v("#")]),t._v(" Task 6")]),t._v(" "),s("ul",[s("li",[t._v("Can you create a new collection and an associated hook. The collection will be called "),s("code",[t._v("Challenges")]),t._v(" . For now, it will hold a single document, containing "),s("code",[t._v("challengeName")]),t._v(", "),s("code",[t._v("challengeStartDate")]),t._v(", "),s("code",[t._v("challengeEndDate")])]),t._v(" "),s("li",[t._v("See if you can use your new hook, to read the the single challenge document. You can use this data to populate the top part of our main dash")])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("h2",{attrs:{id:"task-7-advanced"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-7-advanced","aria-hidden":"true"}},[t._v("#")]),t._v(" Task 7 (Advanced)")]),t._v(" "),s("p",[t._v("Can you work out how to implement the comment functionality?")])])])}),[],!1,null,null,null);a.default=n.exports}}]);