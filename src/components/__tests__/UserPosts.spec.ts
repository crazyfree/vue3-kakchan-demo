import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest';
import { mount, VueWrapper, DOMWrapper } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing'
import UserPosts from '../UserPosts.vue';
import { useUsersStore } from '../../stores/user';

const mockPostList = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
]

describe('UserPosts.vue', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    const pinia = createTestingPinia({createSpy: vi.fn});
    const usersStore = useUsersStore(pinia)
    vi.mocked(usersStore.fetchPosts).mockResolvedValue(mockPostList);

    wrapper = mount(UserPosts, {
      props: {
        selectedUser: {
          id: 1,
          name: 'Leanne Graham',
          email: 'Sincere@april.biz',
          address: { city: 'Gwenborough' },
          company: { name: 'Romaguera-Crona' },
        }
      },
      global: {
        plugins: [pinia],
        mocks: {
        }
      }
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('show user\'s name on top', () => {
    const h2 = wrapper.find('h2');
    expect(h2.text()).contains(['Leanne Graham']);
  });

  it('renders table headers', () => {
    const headers = wrapper.findAll('th') as Array<DOMWrapper<HTMLTableCellElement>>;
    expect(headers).instanceOf(Array);
    expect(headers.length).toBe(2);
    expect(headers.at(0)?.text()).toBe('Title');
    expect(headers.at(1)?.text()).toBe('Body');
  });

  it('renders user rows from filteredUsers',  async () => {
    const rows = wrapper.findAll('tbody > tr');
    expect(rows.length).toBe(2);
    expect(rows.at(0)?.find('td').text()).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    expect(rows.at(1)?.find('td').text()).toBe('qui est esse');
  });
});
