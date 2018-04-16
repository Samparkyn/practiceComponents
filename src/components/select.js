import React, { Component } from 'react';

const optionsArray = ["Europa Park", "Universal Studios", "Islands of Adventure", "Seaworld", "Busch Gardens", "Pleasure Beach", "Liseberg"]

export default class SelectBox extends Component {
  state = {
    showOptions: false,
    selectedIndex: -1,
    selectedValue: '',
    filter: ''
  }
  
  toggleSelectHandler = () => {
    this.setState({showOptions: !this.state.showOptions})
  }
  
  selectOptionHandler = (e) => {
    const idx = e.target.dataset.idx
    const selectedValue = e.target.dataset.value
    this.setState({
      selectedIndex: parseInt(idx),
      selectedValue: selectedValue,
      filter: selectedValue,
      showOptions: false
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
    const { showOptions, selectedIndex, selectedValue, filter } = this.state
    
    let list
    if (showOptions) {
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
      
      list = (
        <ul>
          {options}
        </ul>
      )
    }
    
    return (
      <div>
        <input
          type="text"
          value={filter}
          className="select-box"
          onChange={this.filterOptionsHandler}
          onClick={this.toggleSelectHandler}>
        </input>
        {list}
      </div>
    );
  }
}
