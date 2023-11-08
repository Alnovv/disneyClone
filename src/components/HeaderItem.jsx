import PropTypes from 'prop-types';

function HeaderItem({ name, Icon }) {

  return (
    <div
      className='text-white flex justify-center items-center
      cursor-pointer font-semibold hover:underline underline-offset-8 mb-3'>
      <Icon className='mr-2 text-2xl md:text-3xl' />
      <h2 className=''>{name}</h2>
    </div>
  );
}

HeaderItem.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired,
};

export default HeaderItem;
