import { test, expect } from '@playwright/test';

test('deve consultar um pedido aprovado', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Checkpoint 1: Verificar se a página de landing está online
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');

  await page.getByRole('link', { name: 'Consultar Pedido' }).click();

  // Checkpoint 2: Verificar se a página de consulta de pedido está online
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

  await page.getByTestId('search-order-id').fill('VLO-MQ2U1V');
  await page.getByTestId('search-order-button').click();

  // Checkpoint 3: Verificar se o pedido foi encontrado
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-MQ2U1V');
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');
});