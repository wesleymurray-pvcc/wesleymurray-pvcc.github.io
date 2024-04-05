# Name: Wesley Murray
# Program Purpose: Movie Tickets or something like that.

# == means are these the same
# NUM_SEATS = 24
# num_people = 32
# num_buses = 0
# num_buses = num_people//NUM_SEATS (integer division, whole # division) the bus problem she talked about in class.
# num_kids_remaining = num_people % NUM_SEATS (remainder, modulus division)
# slice the date: dt_full = str(datetime...)
# dt_short = dt_full[0:16] The first # is starting position of where you're going to begin the next # is the starting position of where you want it to end.
# print ('Date/Time',dt_short)
# if (___conditional___): The conditional is the numeric there have to be three things if this then that
# conditional operators: numeric: ==, !=, >, >=, <, <=,,,,,String: ==, !=,,,,others: not, and, or   
# Python collections:lists- ordered, values can be duplicaed and / or changed [ ]
#Tuples- ordered, values can be duped, but not changed ()
#sets-not ordered, values cannot be duped {}
#dictionaries-ordered pairs, key values cannot be duped {}
# prices = (1.99, 4.99, etc.) the first one 1.99 is zero position, next is one etc.

import random
answers_8_ball = ("As I see it, yes", "Ask again later",
"Better not tell you now", "Cannot predict now",
"Concentrate and ask again", "Don't count on it",
"It is certain", "It is decidedly so",
"Most likely", "My reply is NO",
"My sources say NO", "Outlook Good",
"Outlook not so good", "Reply hazy try again",
"Signs point to yes", "Very doubtful",
"Without a doubt", "Yes",
"Yes definitely", "You may rely on it", )

def main():

    print("I am the MAGIC-8 BALL and can answer any YES or NO question!")

    another_question = True
    while another_question:
        answer = random.choice(answers_8_ball)

        print("\nShake the MAGIC-8 BALL")
        print("\n....And NOW....")
        question = input("\nWhat is your YES or NO question?")
        print("The MAGIC-8 ball says: " + answer)

        askAgain = input("\nWould you like to ask me another question (Y or N)?:")
        if askAgain.upper() == "N" or askAgain == "n":
            another_question = False

    print("\nCome back again when you have other important questions.")
    print("...MAGIC-8 BALL OUT!!!")

main()
                  
