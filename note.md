## core of admin page
- dashboard : overview key matrics[sales, orders, traffic, revenue]
- orders : manage customer orders, view order details, update status, process refunds
- products : add/edit/delete products. manage inventory
- customers : view customer information, order history, manage accounts
- report : sale reports
- marketing : manage promotions, banner
- settings : store setting, payment gateway, shipping methods, user roles

## seller page 
- only their products
- only their orders
- sales reports
- payout/earnings
- shop settings 

## user flow
1. define the user and tbei goal 
2. identify the entry point
3. map out the step
4. include decision point
5. determine endpoint

flow : place order -> create order(status : pending) -> Show payment instructions -> user upload slip -> auto verify -> update status: paid -> deduct inventory -> prepare shiping -> update status : shipped -> delivered -> complete



# nextjs 
##  folder and files conventions
### Top level folders
- app : App Router
- pages : Page Router 
- public : Static assets to be served 
- src : Optional source folder

```
he first advantage of .gitignore is that it is versioned into the repository itself, unlike .git/info/exclude. The second advantage is that you can have multiple .gitignore files, one per directory/subdirectory, for directory specific ignore rules, unlike .git/info/exclude.

So the .gitignore files are versioned and present across all clones of the repository. Therefore, in large teams all people are ignoring the same kind of files (e.g. *.db, *.log); and using several .gitignore files allow for more specific ignore rules.

.git/info/exclude is available for individual clones only. It is not versioned, hence what one person ignores in their clone is not available/present in another person's clone. For example, if someone uses Eclipse for development, it may make sense for that developer to add .build folder to .git/info/exclude because other devs may not be using Eclipse.

In general, files/ignore rules that have to be universally ignored should go in .gitignore, and otherwise files that you want to ignore only on your local clone should go into .git/info/exclude.

```