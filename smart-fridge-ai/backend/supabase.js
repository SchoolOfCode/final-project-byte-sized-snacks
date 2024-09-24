import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export Supabase client
export default supabase;

// CREATE ITEM
export const createItem = async (data) => {
  const { data: result, error } = await supabase
    .from('food_inventory')
    .insert([data]);

  if (error) {
    console.error('Error creating item:', error);
    return null;
  }

  return result;
};

// READ ITEMS
export const getItems = async () => {
  const { data: result, error } = await supabase
    .from('food_inventory')
    .select('*');

  if (error) {
    console.error('Error fetching items:', error);
    return null;
  }

  return result;
};

// UPDATE ITEM
export const updateItem = async (item_id, data) => {
  const { data: result, error } = await supabase
    .from('food_inventory')
    .update(data)
    .eq('item_id', item_id);

  if (error) {
    console.error('Error updating item:', error);
    return null;
  }

  return result;
};

// DELETE ITEM
export const deleteItem = async (item_id) => {
  const { data: result, error } = await supabase
    .from('food_inventory')
    .delete()
    .eq('item_id', item_id);

  if (error) {
    console.error('Error deleting item:', error);
    return null;
  }

  return result;
};

