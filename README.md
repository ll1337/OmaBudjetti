# Eva - OmaBudjetti: Personal budgeting tool for Android and iOS.

---
## NOTE: Product incomplete, not being developed
This application is unfinished to the point it does not offer value to anyone willing to use it. The original development team will NOT develop it further, but other teams or persons are welcome to continue the work, as long as they follow the [LICENSE](LICENSE).

---
## INTRODUCTION

Eva – OmaBudjetti is a tool designed for everyday individuals to manage their finances and plan the future. 
Target users are mainly people with low income who struggle to manage with their incomes. 
Eva – OmaBudjetti application aims to provide a motivating and user-friendly solution to help these 
individuals gain control over their finances. 
The key feature of our application is long-term financial planning, which extends beyond the monthly 
budgeting offered by most existing applications. 
This means that in Eva – OmaBudjetti budgets are established for at least 24 months into the future.

## FUNCTIONALITIES

Eva Omabudjetti is a budgeting application which allows users to:
- Create budget(s)
- Add expenses and incomes to budget (monthly, selected months, one time only)
- Edit expenses and incomes
- Delete expenses and incomes
- Change budget name
- Delete the budget
- See current +23 months to the future
- See past months
- See reports made from data
Note that Eva - OmaBudjetti has not been usability tested with users! The application is not perfect.

## State of the App
As it is, the application lacks many key features and is basically unusable. Here is a list of things that work/do not work. More in-depth documentation can be found in the [system testing report](/system_testing/System-testing.pdf). Documentation for how we envisioned the app working once complete can be found in [product_concept.pdf](product_concept.pdf)

WORKING
- initializing a budget with default data
- navigation between views

NOT WORKING/NOT IMPLEMENTED
- opening the menu
- data persistence (app forgets **everything** on restart)
- data importing/exporting (planned to be a menu item)
- selecting a budget
- displaying accurate budget data in month/year views
- editing data
- handling recurring events


## FUTURE DEVELOPEMENT IDEAS

One of the features that of the client suggested was adding gamification elements 
into the application in order to motivate users to save money. 
These gamification elements could include setting savings targets, sending motivational messages to users, 
and rewarding users with a star icon upon achieving their goals.

In addition, the client also proposed the idea of an account-type report view for the application. 
This report view would display the selected month with dates, as well as all the 
events logged to each of the respective dates. 
The aim was to help users plan their budgeting more efficiently, 
by providing insights into when they had expenses and when they could expect income. 
This feature was designed to address the issue of users having to pay rent or bills on 
specific dates, despite not receiving income until a later date.

## Creating a build

To build a version of this app, you have to use the EAS Build service. Create an [expo.dev](https://expo.dev/) account and follow this [documentation](https://docs.expo.dev/build/introduction/). You will need to change the "extra.eas.projectId" and "owner" fields in [app.json](app.json) to create a build on your own account.

After these changes, install the eas client
```
npm install -g eas-cli
```

and run the following to start a build:
```
eas build --profile development
```

To run different builds, either modify the "development" profile or create other profiles in [eas.json](eas.json).


## Of the Developers

This application was originally designed and created as part of a Tampere University software project course by the following people:

Sanna Nykänen  
Tomi Jokkeenhaara  
Marisanna Vepsä  
Leevi Ketola  
Daniil Lukin  
Kalle Karttunen

If someone completes this project one day, a mention of us in an info section would be really cool! :)

## Project customer
Pirkanmaan oikeusaputoimisto, talous- ja velkaneuvonta  
Länsi- ja Sisä-Suomen oikeusapu ja edunvalvontapiiri 

Pirkanmaa Legal Aid Office, financial and debt counselling  
Legal Aid and Public Guardianship District of Western and Inland Finland 

Saana Virtanen  
Talous- ja velkaneuvoja  
Tel. 029 5660 758  
saana.virtanen@oikeus.fi 

Maija Nykänen  
Talous- ja velkaneuvoja  
Tel. 029 5660 754  
maija.nykanen@oikeus.fi 
