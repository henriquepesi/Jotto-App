import checPropTypes from 'check-prop-types';

/**
 * Factory function to create a ShallowWrapper for the congrat components
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - vaue of data-test attribute for searching
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
  const propError = checPropTypes(
    component.propTypes, 
    conformingProps,
    'prop',
    component.name);
    expect(propError).toBeUndefined()
}