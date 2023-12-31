import icons from 'url:../../img/icons.svg';

export class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElments = [...newDOM.querySelectorAll('*')];
    const curElements = [...this._parentElement.querySelectorAll('*')];

    // Update changed text
    newElments.forEach((newEl, i) => {
      const curEl = curElements[i];
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue?.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Update changed attributes
      if (!newEl.isEqualNode(curEl)) {
        [...newEl.attributes].forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpiner() {
    const markup = `
			<div class="spinner">
				<svg>
					<use href="${icons}#icon-loader"></use>
				</svg>
			</div>
		`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
			<div class="error">
				<div>
					<svg>
						<use href="${icons}#icon-alert-triangle"></use>
					</svg>
				</div>
				<p>${message}</p>
			</div>
		`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMesage(message = this._message) {
    const markup = `
			<div class="message">
				<div>
					<svg>
						<use href="${icons}#icon-smile"></use>
					</svg>
				</div>
				<p>${message}</p>
			</div>
		`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
