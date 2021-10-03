import React, { useState } from 'react'
import { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import {
  Sidebar
} from './styles'

const FilterSidebar = () => {

  return (
    <Sidebar>
      <div style={{ padding: '5%' }}>
        <Form.Group>
          <Form.Label style={{ color: 'white' }}>Maker</Form.Label>
          <Form.Control
            as="select"
          >
            <option value="all">All Makers</option>
          </Form.Control>
        </Form.Group>

      </div>
    </Sidebar >
  )
}

export default FilterSidebar
