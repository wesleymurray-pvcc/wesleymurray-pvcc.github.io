# Name: Wesley Murray, Dan Canton
# Program Purpose: This program finds the cost of a pizza meal
# Pythonic
#[Comments 1st]
#[Define global variables and constants]
#[next all the functions] defname like variables, but with parentheses at the end () just at the end
#def then indent, first one is def main() then put main() with no space which is last thing in program
#all upper case makes it a constant lowercase makes it a variable
#   Price for one ticket: $10.99
#   Sales tax rate: 5.5%

import datetime

##############  define items and prices in tuples and tax rate #############

#inswxes-------> 0      1      2      3
PIZZA_SIZE =    ("S",  "M",   "L",   "X")
PIZZA_PRICE =   (9.99, 12.99, 17.99, 21.99)

DRINK_PRICE = 3.99
STICKS_PRICE = 6.99

SALES_TAX_RATE = .055

# define global variable

num_pizzas = 0
num_drinks = 0
num_breadsticks = 0

cost_pizzas = 0
cost_drinks = 0
cost_breadsticks = 0

subtotal = 0
taxamt = 0
total = 0

##############  define program functions  ###############
def main():

    more = True

    while more:
        get_user_data()
        perform_calculation()
        display_results()

        askAgain = input("\nwould you like to order again? (Y or N)? ")
        if askAgain.upper() == "N" or askAgain == "n":
            more = False
            print("Thank you for your order. Enjoy your meal!")
        

def get_user_data():
    global type_pizza, num_pizzas, num_drinks, num_breadsticks

    part1 = "Size of pizza you would like to order: "
    part2 = "\n\tS for Small \n\tM for Medium \n\tL for Large \n\tX for Extra Large\nSize: "
    type_pizza = input(part1 + part2)
    type_pizza = type_pizza.upper()

    num_pizzas = int(input("How many pizzas would you like to order? "))
    num_drinks = int(input("Number of drinks: "))
    num_breadsticks = int(input("Number of breadsticks: "))

def perform_calculation():
    global size, cost_pizzas, cost_drinks, cost_breadsticks, taxamt, total, subtotal

    if type_pizza == PIZZA_SIZE[0]:
        cost_pizzas = num_pizzas * PIZZA_PRICE[0]

    elif type_pizza == PIZZA_SIZE[1]:
        cost_pizzas = num_pizzas * PIZZA_PRICE[1]

    elif type_pizza == PIZZA_SIZE[2]:
        cost_pizzas = num_pizzas * PIZZA_PRICE[2]

    else:
        cost_pizzas = num_pizzas * PIZZA_PRICE[3]

    cost_drinks = num_drinks * DRINK_PRICE
    cost_breadsticks = num_breadsticks * STICKS_PRICE

    subtotal = cost_pizzas + cost_drinks + cost_breadsticks
    taxamt = subtotal * SALES_TAX_RATE
    total = subtotal + taxamt
    print (cost_pizzas)
    
def display_results():
    currency = '8,.2f'
    dt_full = str(datetime.datetime.now())
    dt_shot = dt_full[0:16]
    line =('------------------------------------')

    print (line)
    print ('*********** Palermo Pizza **********')
    print ('**** Your Galaxy Based Pizzeria ****')
    print ('            , dt_short')
    print (line)
    print ("Number of Pizzas: " + str(num_pizzas))
    print (line)
    print ("Pizzas:        \t $" + format(cost_pizzas, currency))
    print ('Drinks         \t $' + format(cost_drinks, currency))
    print ('Bread Sticks   \t $' + format(cost_breadsticks, currency))
    print (line)
    print ('Subtotal:      \t $' + format(subtotal, currency))
    print ('Tax:           \t $' + format(taxamt, currency))   
    print ('Total:         \t $' + format(total, currency))
    print (line)

main()







    


    






    

        


def display_results():
    print("DISPLAY RESULTS HERE")



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











          

