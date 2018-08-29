// Copyright (c) Microsoft Corporation and others. Licensed under the MIT license.
// SPDX-License-Identifier: MIT
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InlineEditor from './InlineEditor'

/**
 * Specific renderer for Licenses data
 * It show a string of data, and if clicked opens a Popover containing a list of details
 *
 */
class LicensesRenderer extends Component {
  render() {
    const { value, isDifferent, onSave } = this.props

    return (
      <InlineEditor
        extraClass={isDifferent ? 'license--isEdited' : ''}
        readOnly={false}
        type={'license'}
        initialValue={value}
        value={value}
        onChange={value => onSave(value)}
        validator
        placeholder={'SPDX License'}
      />
    )
  }
}

LicensesRenderer.propTypes = {
  /**
   * item to show
   */
  value: PropTypes.string.isRequired,
  isDifferent: PropTypes.bool,
  onSave: PropTypes.func
}

export default LicensesRenderer
