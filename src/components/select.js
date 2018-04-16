import React, { Component } from 'react';

const optionsArray = ["Europa Park", "Universal Studios", "Islands of Adventure", "Seaworld", "Busch Gardens", "Pleasure Beach", "Liseberg"]

export default class SelectBox extends Component {
  state = {
    optionsAreVisible: false,
    selectedIndex: -1,
    selectedValue: '',
    filter: ''
  }
  
  toggleSelectHandler = () => {
    this.setState({optionsAreVisible: !this.state.optionsAreVisible})
  }
  
  selectOptionHandler = (e) => {
    const idx = e.target.dataset.idx
    const selectedValue = e.target.dataset.value
    this.setState({
      selectedIndex: parseInt(idx),
      selectedValue: selectedValue,
      filter: selectedValue,
      optionsAreVisible: false
    })
  }
  
  mouseEnterEventListener = (e) => {
    const idx = e.target.dataset.idx
    this.setState({ selectedIndex: parseInt(idx) })
  }
  
  filterOptionsHandler = (e) => {
    const filter = e.target.value
    this.setState({ filter })
  }
  
  render() {
    const { optionsAreVisible, selectedIndex, selectedValue, filter } = this.state
    
    const options = optionsArray
      .filter((option) => {
        return option.toLowerCase().indexOf(filter.toLowerCase()) !== -1
      })
      .map((option, idx) => {
        const isSelected = idx === selectedIndex
        let className = "list-option"
      
        if (isSelected){
          className = isSelected ? "list-option selected" : "list-option"
        }
  
        return (
          <li
            className={className}
            data-idx={idx}
            data-value={option}
            key={option}
            value={option}
            onClick={this.selectOptionHandler}
            onMouseEnter={this.mouseEnterEventListener}
          >
            {option}
          </li>
        )
    })
    
    return (
      <div>
        <input
          type="text"
          value={filter}
          className="select-box"
          onChange={this.filterOptionsHandler}
          onClick={this.toggleSelectHandler}>
        </input>
        <ul>
          {options}
        </ul>
      </div>
    );
  }
}
