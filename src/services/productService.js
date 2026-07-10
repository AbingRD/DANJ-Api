const supabase = require('../config/supabase');

const TABLE = 'products';

const getProducts = async () => {
  const { data, error } = await supabase
    .from(TABLE)
    .select('*')
    .order('product_name');

  if (error) throw error;

  return data;
};

const getProduct = async (id) => {
  const { data, error } = await supabase
    .from(TABLE)
    .select('*')
    .eq('product_id', id)
    .single();

  if (error) throw error;

  return data;
};

const createProduct = async (product) => {
  const { data, error } = await supabase
    .from(TABLE)
    .insert(product)
    .select()
    .single();

  if (error) throw error;

  return data;
};

const updateProduct = async (id, product) => {
  const { data, error } = await supabase
    .from(TABLE)
    .update(product)
    .eq('product_id', id)
    .select()
    .single();

  if (error) throw error;

  return data;
};

const deleteProduct = async (id) => {
  const { error } = await supabase
    .from(TABLE)
    .delete()
    .eq('product_id', id);

  if (error) throw error;
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};