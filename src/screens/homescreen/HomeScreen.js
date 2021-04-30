import React from 'react'

const HomeScreen = () => {
    return (
        <Container>
            <CategoriesBar/>
            <Row>
                {[...new Array(20)].map(() => (
                    <Col Lg={3} 
                ))}
            </Row>
        </Container>
    )
}

export default HomeScreen
