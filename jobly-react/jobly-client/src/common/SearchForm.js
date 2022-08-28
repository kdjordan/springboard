import React, { useState } from "react"
import { InputGroup, Button, Input, Form } from "reactstrap"


export default function SearchForm({doSearch}) {
    const [search, setSearch] = useState("")

    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('grabbing ',search)
        doSearch(search.trim())
        setSearch(search.trim())
    }


    return (
        <div className="SearchForm mb-3">
                <Form onSubmit={handleSubmit}>
                    <InputGroup onSubmit={handleSubmit}>
                        <Input 
                        onChange={handleChange}
                            placeholder="Enter search term..."
                        />
                        <Button color="primary">Submit</Button>
                    </InputGroup>
                </Form>
               
            </div>
    )
}