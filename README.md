On entering the details of an expense, it should get added to the list. In the expense breakdown section, the share of the type of expense should be updated.
For example, if 10 Rs (Rupees) are spent on Food, 20Rs spent on Travel, 60Rs spent on Other and 10Rs spent on Shopping, the breakdown is 10%, 20%, 60%, 10% respectively for Food, Travel, Other and Shopping.
The component should have the following functionalities.
The input should be validated as:
• The expense title must not be empty or it should alert with the text 'Expense Name required'
• The expense amount must not be empty and it should be greater than 0 (positive integer) or else it should show an alert with the text 'Expense Amount required and should be greater than O'
• The expense dropdown should have the 'Select Type' option selected by default, which should be disabled.
• If Add expense button is clicked without selecting expense type, an alert with the text 'Please Choose Expense Type' should be shown.
• On adding a new expense with valid data, the expense should be displayed in the Expense List.
• The expense breakdown should initially be 25% for each type of expense when there is no expense in the list.
• On adding a new expense, the share of expense should be calculated as: • Share of expense type = amount spent on this type /total expense\*100
• The share of any expense could be converted to the nearest integer value. o e.g. 10.50% should be converted to 11% or 10%
Note:
Please note that components have the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.
The only file that should be modified by the candidate is "src/components/expenses- tracker/ExpensesTracker.js" and is open by default by the system editor.
It is advised for candidates to avoid making any changes to the rest of the files in the project structure.

# React Starter

## Environment

- React Version: 16.13.1
- Node Version: 14(LTS)
- Default Port: 8000

## [Change]: Project Specifications

```text
Note: Add your project specific Read only files below.
```

**Read Only Files**

- `src/App.test.js`

**Commands**

- run:

```bash
npm start
```

- install:

```bash
npm install
```

- test:

```bash
npm test
```
