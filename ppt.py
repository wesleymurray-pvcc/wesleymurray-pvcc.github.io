# Name: Wesley Murray
# Program Purpose: This program finds the personal property tax for six months
#PPT rate: 4.2%
#   Relief rate: 33% (for personal vehicles only)
import datetime

##############  define global variable  ##############
# define tax rate and prices

PPT_RATE = .042
RELIEF_RATE = .33

# define global variable
assessed_value = 0
relief_yn = "N"

##############  define program functions  ###############
def main():

    prompt_in = "\nIs there another PPT payer (Y or N) "
    goodbye_msg = "Personal Property Taxes are due DEC 5, 2024"
    more = True

    while more:
        get_user_data()
        perform_calculation()
        display_results()

        yesno = input(prompt_in)
        if (yesno.upper() == "N"):
            more = False
            print(goodbye_msg)


def get_user_data():
    global assessed_value, relief_yn
    assessed_value = int(input("What is the assessed value of the vehicle?"))
    relief_yn = input("Is the vehicle eligible for relief? (Y/N) ")
    relief_yn = relief_yn.upper()

def perform_calculation():
    global ppt_amount_annual, ppt_amount_6months, relief_amount, amount_owed, biannual_amount_owed
    ppt_amount_annual = assessed_value * PPT_RATE

    if relief_yn == "Y":
        relief_amount = ppt_amount_annual * RELIEF_RATE
    else: 
        relief_amount = 0 

    amount_owed = ppt_amount_annual - relief_amount
    biannual_amount_owed = amount_owed / 2
    print(biannual_amount_owed) #will remove after I get working
    

def display_results():

    currency = '8,.2f'

    print('-----------------------------')
    print(str(datetime.datetime.now()))
    print('-----------------------------')
    print('*****Charlottesville Personal Property Tax*****')
    print('******Pay up, or we burn your house down!*******')
    print('-----------------------------')
    print('Assessed Value      $ ' + format(assessed_value,currency))
    print('Annual Tax Amount   $ ' + format(ppt_amount_annual, currency))
    print('Relief Amount       $ ' + format(relief_amount, currency))
    print('Amount Owed(6 mo.)  $ ' + format(biannual_amount_owed, currency))
    

    
    print('-----------------------------')
    print(str(datetime.datetime.now()))

##############  call on main program to execute  ##############
main()











          

