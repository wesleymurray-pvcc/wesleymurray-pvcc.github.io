# Name: Wesley Murray
# Program Purpose: This program finds the cost of movie tickets
# Pythonic
#[Comments 1st]
#[Define global variables and constants]
#[next all the functions] defname like variables, but with parentheses at the end () just at the end
#def then indent, first one is def main() then put main() with no space which is last thing in program
#all upper case makes it a constant lowercase makes it a variable
#   Price for one ticket: $10.99
#   Sales tax rate: 5.5%

import datetime

##############  define global variable  ##############
# define tax rate and prices

SALES_TAX_RATE = .055
PR_TICKET = 10.99

# define global variable
num_tickets = 0
subtotal = 0
sales_tax = 0
total = 0

##############  define program functions  ###############
def main():

    more_tickets = True

    while more_tickets:
        get_user_data()
        perform_calculation()
        display_results()

        yesno = input("\nwould you like to order again (Y or N)? ")
        if yesno == "N" or yesno =="n":
            more_tickets = False
            print("Thank you for your order. Enjoy your movie!")




def get_user_data():
    global num_tickets
    num_tickets = int(input("number of movie tickets:"))
def perform_calculation():
    global subtotal, sales_tax, total
    subtotal = num_tickets * PR_TICKET
    sales_tax = subtotal * SALES_TAX_RATE
    total = subtotal + sales_tax

def display_results():
    print('-----------------------------')
    print(str(datetime.datetime.now()))
    print('-----------------------------')
    print('*****CINEMA HOUSE MOVIES*****')
    print('your neighborhood movie house')
    print('-----------------------------')
    print('Tickets      $ ' + format(subtotal,'8,.2f'))
    print('Sales Tax    $ ' + format(sales_tax,'8,.2f'))
    print('Total        $ ' + format(total,'8,.2f'))
    print('-----------------------------')
    print(str(datetime.datetime.now()))

##############  call on main program to execute  ##############
main()











          

