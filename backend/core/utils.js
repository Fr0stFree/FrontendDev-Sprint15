const { ObjectDoesNotExist } = require('./errors');
const { User } = require('../models');

const getObjectOrRaise404 = async (Model, id) => {
  const obj = await Model.findById(id);
  if (!obj) {
    throw new ObjectDoesNotExist(`'${Model.modelName}' c id ${id} не найден`);
  }
  return obj;
};

function cachingDecorator() {
  const cache = new Map();

  return async function (id) {
    if (cache.has(id)) {
      return cache.get(id);
    }
    const result = await getObjectOrRaise404(User, id);
    cache.set(id, result);
    return result;
  };
}

const getUser = cachingDecorator();

module.exports = {
  getObjectOrRaise404,
  getUser,
};
