import React from 'react';
import styled from 'styled-components';

const Budget = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <SubContainer>
                        <div className='total-amount-container'>
                            <h3>Budget</h3>
                            <BudgetError className='hide-error'>
                                Value cannot be empty or negative
                            </BudgetError>
                            <TotalAmountInput />
                            <SubmitButton>Set Budget</SubmitButton>
                        </div>

                        <div className='user-amount-container'>
                            <h3>Expenses</h3>
                            <BudgetError className='product-title-error'>
                                Value cannot be empty
                            </BudgetError>
                            <TitleInput />
                            <SubmitButton>Check Amout</SubmitButton>
                        </div>

                        <div className='output-container'>
                            <div>
                                <p>Total Budget</p>
                                <span id="amount">
                                    0
                                </span>
                            </div>
                            <div>
                                <p>Expenses</p>
                                <span id="Expenses-amount">
                                    0
                                </span>
                            </div>
                            <div>
                                <p>Balance</p>
                                <span id="Balance-amount">
                                    0
                                </span>
                            </div>
                        </div>
                    </SubContainer>  
                </Container>

                <ListItem>
                    <h3>Expenses List</h3>
                    <ListContainer></ListContainer>
                </ListItem>
            </Wrapper>
        </>
    );
};

export default Budget;

const Wrapper = styled.div`
display: flex;
width: 90%;
`;

const Container = styled.div`
display: flex;
`;

const SubContainer = styled.div`
display: flex;
.total-amount-container {

}

.user-amount-container{

}

.output-container {

}
`;

const BudgetError = styled.p`
display: flex;
`;

const TotalAmountInput = styled.input.attrs({
    type: "number",
    placeholder : "Enter Total Amount"
})`
display: flex;
`;

const SubmitButton = styled.button`
display: flex;

`;


const TitleInput = styled.input.attrs({
    type: "text",
    placeholder : "Enter Title of Product"
})`
display: flex;
`;

const ListItem = styled.div`

`;

const ListContainer = styled.div`
`;