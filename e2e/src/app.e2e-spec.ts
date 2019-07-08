import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';
import { ConstantesHtml } from './constanteshtml.e2e';

describe('workspace-project App', () => {
  let page: AppPage;

  var select,
      option;

  beforeEach(() => {
    page = new AppPage();
    select = element(by.tagName('mat-select'));
    option = element(by.css('mat-option[value="2"]'));
  });

  it('debe crear un nuevo registro', () => {
    //browser.get('http://localhost:4200/vehiculos');
    page.navigateTo();
    element(by.id(ConstantesHtml.ID_BOTON_CREAR)).click();
    browser.sleep(1000);
    //element(by.id(ConstantesHtml.ID_REGISTRO)).sendKeys();
    element(by.id(ConstantesHtml.PLACA_REGISTRO)).sendKeys(ConstantesHtml.VALOR_PLACA);
    browser.sleep(1000);
    element(by.id(ConstantesHtml.CILINDRAJE_REGISTRO)).sendKeys(ConstantesHtml.VALOR_CILINDRAJE);
    browser.sleep(1000);
    select.click();
    option.click();
    browser.sleep(1000);
    element(by.id(ConstantesHtml.ID_BOTON_ACEPTAR)).click();
    browser.sleep(5000);
  });




/*
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to parque-front!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });*/
});
