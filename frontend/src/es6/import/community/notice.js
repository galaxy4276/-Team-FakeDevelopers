/* Module */
import postList from '../../common/post/postList/postList';

/* Constant */
const notice = {
  parentElem: document.querySelector('.post-list__posts'),
  path: 'community/notice',
  limit: 15,
};

/* Function */
document.addEventListener(
  'DOMContentLoaded',
  () => {
    // postList(parentElem, boardName, limit) => 이렇게 호출하면 된다.

    postList(Object.values(notice));
  },
  false
);
