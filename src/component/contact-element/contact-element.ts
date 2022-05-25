import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {styles} from './styles';

@customElement('contact-element')
export class ContactElement extends LitElement {
  static styles = styles;

  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  firstUpdated(): void {}

  render() {
    return html`<h2>Contact element component</h2>`;
  }
}
