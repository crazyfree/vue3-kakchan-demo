import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils';
import UserTable from '../UserTable.vue';
import { createTestingPinia } from '@pinia/testing'
import { useUsersStore } from '../../stores/user';

describe('UserTable.vue', () => {
  let wrapper: VueWrapper;
  let mockUsers;
  let mockSelectUser: any;

  beforeEach(() => {
    mockUsers = [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        address: { city: 'Gwenborough' },
        company: { name: 'Romaguera-Crona' },
      },
      {
        id: 2,
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
        address: { city: 'Wisokyburgh' },
        company: { name: 'Deckow-Crist' },
      },
    ];

    mockSelectUser = vi.fn();

    wrapper = mount(UserTable, {
      global: {
        plugins: [createTestingPinia({createSpy: vi.fn})],
        mocks: {
          selectUser: mockSelectUser
        }
      }
    });

    const usersStore = useUsersStore()
    usersStore.users = mockUsers
    usersStore.filteredUsers = mockUsers
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders table headers', () => {
    const headers = wrapper.findAll('th') as Array<DOMWrapper<HTMLTableCellElement>>;
    expect(headers).instanceOf(Array);
    expect(headers.length).toBe(4);
    expect(headers.at(0)?.text()).toBe('Name');
    expect(headers.at(1)?.text()).toBe('Email');
    expect(headers.at(2)?.text()).toBe('City');
    expect(headers.at(3)?.text()).toBe('Company');
  });

  it('renders user rows from filteredUsers', () => {
    const rows = wrapper.findAll('tbody > tr');

    expect(rows.length).toBe(2);
    expect(rows.at(0)?.find('td').text()).toBe('Leanne Graham');
    expect(rows.at(1)?.find('td').text()).toBe('Ervin Howell');
  });

  it('emits click event on row click', async () => {
    const firstRow = wrapper.find('tbody > tr');
    await firstRow.trigger('click');

    expect(firstRow.find('td').text()).toBe('Leanne Graham');
    expect(mockSelectUser).toHaveBeenCalledWith(1);
  });
});
