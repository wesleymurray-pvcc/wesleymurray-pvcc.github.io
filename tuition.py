# Name: Wesley Murray, Dan Canton
# Program Purpose: Calculating tuition and fees at PVCC
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

RATE_TUITION_IN = 159.61
RATE_TUITION_OUT = 336.21
RATE_CAPITAL_FEE = 23.50
RATE_INSTITUTION_FEE = 1.75
RATE_ACTIVITY_FEE = 2.90

# define global variable

inout = 1
numcredits = 0
scholarshipamt = 0

tuition_amt = 0
inst_fee = 0
cap_fee = 0
act_fee = 0
total = 0
balance = 0

##############  define program functions  ###############
def main():

    more = True

    while more:
        get_user_data()
        perform_calculation()
        display_results()

        yesno = input("\nwould you like to calculate tuition & fees for another student? (Y/N)? ")
        if yesno == "n" or yesno == "N":
            another_student = False
            print("Thank you for enrolling at PVCC. Enjoy the semester!")
        

def get_user_data():
    global inout, numcredits, scholarshipamt
    print('****PIEDMONT VIRGINIA COMMUNITY COLLEGE Tuition & Fees****')
    inout = int(input("Enter a 1 for IN_STATE; enter a 2 for OUT_OF_STATE: "))
    numcredits = int(input("number of credits registered for: "))
    scholarshipamt = int(input("Scholarship amount received: ")) 

def perform_calculation():
    global tuition_amt, inst_fee, cap_fee, act_fee, total, balance 
        

    if inout == 1:
        tuition_amt = numcredits * RATE_TUITION_IN
        cap_fee = 0
    else:
        tuition_amt = numcredits * RATE_TUITION_OUT
        cap_fee = numcredits * RATE_CAPITAL_FEE

    inst_fee = numcredits * RATE_INSTITUTION_FEE

    act_fee = numcredits * RATE_ACTIVITY_FEE

    total = tuition_amt + inst_fee + act_fee + cap_fee

    balance = total - scholarshipamt

# calculations for the other fees, total, and balance go here

        


def display_results():
    currency = '8,.2f'
    line = '----------------------------'



    print(line)



    print('-----------------------------')
    print(str(datetime.datetime.now()))
    print('-----------------------------')
    print('*****Piedmont Virginia Community College*****')
    print('tuition and fees report')
    print('-----------------------------')
    print('tuition_amt      $ ' + format(tuition_amt,currency))
    print('cap_fee    $ ' + format(cap_fee,currency))
    print('act_fee    $ ' + format(act_fee, currency))
    print('total        $ ' + format(total,currency))
    print('subtotal     $ ' + format(total - scholarshipamt,currency))
    print('-----------------------------')
    print(str(datetime.datetime.now()))

##############  call on main program to execute  ##############
main()











          

