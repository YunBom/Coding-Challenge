# Write your code here:

# Don't touch anthing below this line 🙅🏻‍♂️🙅🏻‍♀️

monthly_revenue = 5500000
monthly_expenses = 2700000
tax_credits = 0.01

def get_yearly_revenue(monthly_revenue):
    yearly_revenue = monthly_revenue * 12
    return yearly_revenue

def get_yearly_expenses(monthly_expenses):
    get_yearly_expenses = monthly_expenses*12
    return get_yearly_expenses

profit = get_yearly_revenue(monthly_revenue) - get_yearly_expenses(monthly_expenses)

def get_tax_amount(profit):
    if profit > 100000 :
        tax_credits = 0.25
        tax_amount = profit*tax_credits
        return tax_amount
    else:
        tax_credits = 0.15
        tax_amount = profit*tax_credits
        return tax_amount


def apply_tax_credits(tax_amount, tax_credits):
    discount = tax_amount*tax_credits
    return discount

tax_amount = get_tax_amount(profit)

final_tax_amount = tax_amount - apply_tax_credits(tax_amount, tax_credits)

print(f"Your tax bill is: ${final_tax_amount}")




"""

Requirements (요구사항)
get_tax_amount 함수는 if/else 를 사용해야한다.
만약 (if) profit이 100,000 초과이면. 세율은 25% 이다.
아닌 경우에는 (else). 세율은 15% 이다.

"""